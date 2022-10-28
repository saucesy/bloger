
const {
  readdirSync,
  copyFileSync
} = require("fs");

const {
  createHtml
} = require("../compiler");

const {
  innerPath,
  outerPath
} = require("../config");

function initFiles(options) {
  copyFiles("js");
  copyFiles("css");
  copyWelcomePage();
  createHtml(options);
}

function copyFiles(field) {
  let _innerPath = innerPath[field];
  let _outerPath = outerPath[field];
  let _innerFiles = readdirSync(innerPath[field]);
  let _outerFiles = readdirSync(outerPath[field]);

  _innerFiles.forEach((file) => {
    if (_outerFiles.indexOf(file) === -1) {
      const src = _innerPath + "/" + file;
      const dest = _outerPath + "/" + file;
      copyFileSync(src, dest, 0, (err) => {
        if (err) {
          throw new Error("File is failed to copy.", err);
        }
      })
    }
  })
}

function copyWelcomePage() {
  const src = innerPath.html + "/welcome.html";
  const dest = outerPath.html + "/welcome.html";
  const _htmlFiles = readdirSync(outerPath.html);

  if (!_htmlFiles.length) {
    copyFileSync(src, dest, 0, (err) => {
      if (err) {
        throw new Error("File is failed to copy.");
      }
    })
  }
}


module.exports = initFiles;