const fs = require("node:fs");                 //It is used to read or write the files.
const EventEmitter = require("node:events");  //create a custom events.
const { Transform } = require("node:stream");   //It is used to read and processed the data.
const { pipeline, finished } = require("node:stream/promises");   //pipeline is used to connect streams and handle the errors.

const eventBus = new EventEmitter();

eventBus.on("start", () => {
    console.log("Log cleaning started...");
});

eventBus.on("complete", () => {
    console.log("Log cleaning completed!");
    console.log("Cleaned logs saved to cleaned.log");
    console.log("Error logs saved to incident.log");
});

eventBus.on("failed", (error) => {
    console.error("Log cleaning failed:", error.message);
});

async function main() {
    eventBus.emit("start");

    const incidentOutput = fs.createWriteStream("incident.log");
    const incidentDone = finished(incidentOutput);

    let pending = "";

    const cleaner = new Transform({
        transform(chunk, encoding, callback) {
            pending += chunk.toString();

            const lines = pending.split(/\r?\n/);
            pending = lines.pop();

            processLines(lines, this)
                .then(() => callback())
                .catch(callback);
        },

        flush(callback) {
            const lastLine = pending;
            pending = "";

            processLines(lastLine ? [lastLine] : [], this)
                .then(() => callback())
                .catch(callback);
        }
    });

    async function processLines(lines, stream) {
        for (const line of lines) {
            if (!line.trim()) continue;

            // Remove successful request lines
            if (line.includes("200 OK")) continue;

            // Save error lines to the incident log
            if (line.includes("ERROR")) {
                await new Promise((resolve, reject) => {
                    incidentOutput.write(line + "\n", (error) => {
                        if (error) reject(error);
                        else resolve();
                    });
                });
            }

            // Send remaining lines to cleaned.log
            stream.push(line + "\n");
        }
    }

    try {
        await pipeline(
            fs.createReadStream("server.log"),
            cleaner,
            fs.createWriteStream("cleaned.log")
        );

        incidentOutput.end();
        await incidentDone;

        eventBus.emit("complete");
    } catch (error) {
        incidentOutput.destroy();
        await incidentDone.catch(() => {});

        eventBus.emit("failed", error);
        process.exitCode = 1;
    }
}

main();