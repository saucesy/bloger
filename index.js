
const {
  initFiles,
  initFolders,
  initWatchers
} = require("./init");

class ViteDocCreator {
  constructor(options) {
    this._options = {
      title: undefined,
      port: 0,
      domain: undefined
    }

    console.log(process.env);

    if (options) {
      Object.assign(this._options, options);
    }

    this.initialize();
  }

  initialize() {
    initFolders(this._options);
    initFiles(this._options);
    initWatchers();
  }
}

module.exports = ViteDocCreator;