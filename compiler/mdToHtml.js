
const {
  writeFileSync
} = require("fs");

const { marked } = require("marked");
const highlight = require("highlight.js");

const { readFile } = require("../libs/utils");

marked.setOptions({
  highlight(code) {
    return highlight.highlightAuto(code).value;
  }
})

const {
  innerPath,
  outerPath,
  regexp
} = require("../config");

function mdToHtml(filename) {
  let _htmlStr = readFile(innerPath.html + "/md.html");
  const _markdownStr = readFile(outerPath.md + "/" + filename);
  _htmlStr = _htmlStr.replace(regexp.markdown, marked.parse(_markdownStr));

  writeFileSync(outerPath.html + "/" + filename.replace(".md", ".html"), _htmlStr, (err) => {
    if (err) {
      throw new Error("File is failed to write.", err);
    }
  });
}

module.exports = mdToHtml;