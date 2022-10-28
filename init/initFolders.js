
const { mkdirSync, existsSync } = require("fs");

const {
  outerPath:
  { src, md, js, css, html }
} = require("../config");

function initFolders(options) {
  if (!existsSync(src)) {
    createFolder(src);
  }

  if (!existsSync(md)) {
    createFolder(md);
  }

  if (!existsSync(js)) {
    createFolder(js);
  }

  if (!existsSync(css)) {
    createFolder(css);
  }

  if (!existsSync(html)) {
    createFolder(html);
  }
}

function createFolder(path) {
  mkdirSync(path, (err) => {
    if (err) {
      throw new Error("Folder is failed to create.", err);
    }
  })
}

module.exports = initFolders;   