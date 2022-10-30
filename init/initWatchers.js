
const {
  watch,
  existsSync,
  unlinkSync
} = require("fs");

const { outerPath } = require("../config");

const {
  mdToHtml,
  createHtml,
} = require("../compiler")

function initWatchers(options) {
  watchHtml(options);
  watchWorkSpace(options);
}

function watchHtml(options) {
  watch(outerPath.html, (event, filename) => {
    if (filename) {
      createHtml(options, event === "change" && filename);
    }
  })
}

function watchWorkSpace(options) {
  watch(outerPath.md, (event, filename) => {
    if (filename) {
      if (!existsSync(outerPath.md + "/" + filename)) {
        const removingFile = outerPath.html + "/" + filename.replace(".md", ".html");
        existsSync(removingFile) && unlinkSync(removingFile);
        return;
      }
      mdToHtml(filename);
    }
  })
}

module.exports = initWatchers;