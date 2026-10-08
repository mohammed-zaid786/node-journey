const fs = require("node:fs/promises");
const path = require("node:path");

const notesDir = path.join(__dirname, "notes");

async function startApp() {
  await fs.mkdir(notesDir, {
    recursive: true
  });

  const command = process.argv[2];

  try {
    if (command === "create") {
      await createNote();
    } else if (command === "view") {
      await viewNote();
    } else if (command === "list") {
      await listNotes();
    } else if (command === "delete") {
      await deleteNote();
    } else {
      showHelp();
    }
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}

async function createNote() {
  const title = process.argv[3];
  const content = process.argv.slice(4).join(" ");

  if (!title || !content) {
    console.log('Usage: node notes.js create <title> "<content>"');
    return;
  }

  const filePath = path.join(notesDir, `${title}.md`);

  await fs.writeFile(filePath, content);

  console.log(`Note "${title}" created successfully.`);
}

async function viewNote() {
  const title = process.argv[3];

  if (!title) {
    console.log("Please provide a note name.");
    return;
  }

  const filePath = path.join(notesDir, `${title}.md`);

  const content = await fs.readFile(filePath, "utf8");

  console.log("\n--- Note ---");
  console.log(content);
  console.log("------------");
}

async function listNotes() {
  const files = await fs.readdir(notesDir);

  const noteFiles = files.filter(
    (file) => path.extname(file) === ".md"
  );

  if (noteFiles.length === 0) {
    console.log("No notes found.");
    return;
  }

  console.log("\nYour Notes:");

  for (const file of noteFiles) {
    console.log("-", path.basename(file, ".md"));
  }
}

async function deleteNote() {
  const title = process.argv[3];

  if (!title) {
    console.log("Please provide a note name.");
    return;
  }

  const filePath = path.join(notesDir, `${title}.md`);

  await fs.unlink(filePath);

  console.log(`Note "${title}" deleted successfully.`);
}

function showHelp() {
  console.log(`
Quick Notes

Create:
node notes.js create <title> "<content>"

View:
node notes.js view <title>

List:
node notes.js list

Delete:
node notes.js delete <title>
`);
}

startApp();