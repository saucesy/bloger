
const {
  initFiles,
  initFolders,
  initWatchers
} = require("./init");

class ViteDocCreator {
  constructor(options) {
    this.options = {
      title: undefined,
      port: 0,
      domain: undefined
    }

    if (options) {
      Object.assign(this.options, options);
    }

    this.initialize();
  }

  initialize() {
    initFiles();
    initFolders();
    initWatchers();
  }
}

module.exports = ViteDocCreator;