const { resolve } = require("path");

const port = 8080;
const domain = "http://localhost";
const title = "This is a first document by Vite-Doc-Creator";

const outerPath = {
  root: resolve(__dirname, "../../../"),
  src: resolve(__dirname, "../../../src/"),
  js: resolve(__dirname, "../../../src/js/"),
  css: resolve(__dirname, "../../../src/css/"),
  md: resolve(__dirname, "../../../workspace/"),
  html: resolve(__dirname, "../../../src/html/"),
}

const innerPath = {
  root: resolve(__dirname, "../temp_files/"),
  js: resolve(__dirname, "../temp_files/js/"),
  css: resolve(__dirname, "../temp_files/css/"),
  html: resolve(__dirname, "../temp_files/html/"),
}

module.exports = {
  port,
  title,
  domain,
  outerPath,
  innerPath
}