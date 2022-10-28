
const fs = require("fs");

function readFile(path) {
  return fs.readFileSync(path, "utf-8");
}

function tplReplace(regexp, tpl, content) {
  return tpl.replace(tpl.match(regexp)[1], content);
} 

module.exports = {
  readFile,
  tplReplace
}