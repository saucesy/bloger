const {
  readdirSync,
  copyFileSync,
  writeFileSync,
  readFileSync,
} = require("fs");

const {
  readFile,
  tplReplace
} = require("../libs/utils");

const {
  port,
  title,
  domain,
  innerPath,
  outerPath,
  regexp
} = require("../config");

function createHtml(options) {
  _createIndexHtml(options);
}

function _createIndexHtml(options) {
  const _htmlFiles = readdirSync(outerPath.html);

  if (!_htmlFiles.length) {
    return copyFileSync(innerPath.html + "/index.html", outerPath.root + "/index.html", 0, function (err) {
      if (err) {
        throw new Error("File is faild to copy.", err);
      }
    })
  }

  let newHtml = "";
  let menuList = "";
  const _indexHtml = readFile(innerPath.html + "/index.html");

  _htmlFiles.forEach((file, index) => {
    menuList += _createMenuItem(file, options.domain, options.port, !index ? true : false);
  })

  newHtml = tplReplace(regexp.menu, _indexHtml, menuList);
  newHtml = tplReplace(regexp.title, newHtml, options.title || title);
  newHtml = tplReplace(regexp.headerTitle, newHtml, options.title || title);
  newHtml = tplReplace(regexp.iframe, newHtml, _createIframe("welcome.html", options.domain, options.port));

  writeFileSync(outerPath.root + "/index.html", newHtml);
}

function _createMenuItem(filename, userDomain, userPort, isActive) {
  return `
    <li class="menu-item${isActive ? " active" : ""}">
      <a href="${_formatBaseURL(userDomain, userPort)}/src/html/${filename}" target="myFrame">${filename.replace(".html", "")}</a>
    </li>
  `;
}

function _createIframe(filename, userDomain, userPort) {
  return `
    <iframe src="${_formatBaseURL(userDomain, userPort)}/src/html/${filename}" name="myFrame"></iframe>
  `;
}

function _formatBaseURL(userDomain, userPort) {
  userPort = Number(userPort);

  if (userDomain && userPort) {
    return `${userDomain}:${userPort}`;
  } else if (userDomain && !userPort) {
    return userDomain;
  } else if (!userDomain && userPort) {
    return `${domain}:${userPort}`;
  } else if (!userDomain && !userPort) {
    return `${domain}:${port}`;
  } else {
    return `${domain}:${port}`;
  }
}

module.exports = createHtml;