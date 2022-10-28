const { resolve } = require("path");

const port = process.env.npm_config_port || process.env.npm_port || 5173;
const domain = "http://localhost";
const title = "This is my first Document by Vite-Doc-Creator";

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

const regexp = {
  title: /<title>([\s\S]*?)<\/title>/,
  menu: /<ul class="menu-list">([\s\S]*?)<\/ul>/,
  iframe: /<div class="iframe-page">([\s\S]*?)<\/div>/,
  headerTitle: /<h1 class="header-title">([\s\S]*?)<\/h1>/,
}

module.exports = {
  port,
  title,
  domain,
  outerPath,
  innerPath,
  regexp
}