const path = require("node:path");

const files = ["notes.md", "profile.jpg", "app.js", "data.json"];

for (const file of files  ) {
    console.log(file, "=>", path.extname(file));
}

/* op:- notes.md => .md
profile.jpg => .jpg
app.js => .js
data.json => .json */
