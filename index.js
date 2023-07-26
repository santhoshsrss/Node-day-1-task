import fs from "fs";
import path from "path";
const __dirname = path.resolve();
const time = new Date().toLocaleString();
const today = new Date();

const current = `Date ${today.getDate()}-${
  today.getMonth() + 1
}-${today.getFullYear()}, Time ${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}`;

fs.writeFile(`./${current}.txt`, time, (err) => {
  if (err) {
    console.log(Error);
  } else {
    console.log("file created");
  }
});

fs.readdir(__dirname, (err, files) => {
  if (err) console.log(Error);
  else {
    console.log("Filenames with the .txt extension:");
    files.forEach((file) => {
      if (path.extname(file) == ".txt") console.log(file);
    });
  }
});