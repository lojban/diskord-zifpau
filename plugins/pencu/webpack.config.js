var webpack = require("webpack");
var path = require("path");

var name = "pencu";
var author = "cadgu'a";
var namespace = "https://github.com/lojban";
var version = "0.0.1";
var description = "Lojban hover definitions for Discord";
var require = "https://code.jquery.com/jquery-3.1.0.min.js";
var match = "*://discordapp.com/channels/*";
var run_at = "document-idle";
var grant = "none";

var userscript_header = `// ==UserScript==
// @name         ${name}
// @namespace    ${namespace}
// @downloadURL  https://rawgit.com/lojban/diskord-zifpau/master/pencu/pencu.user.js
// @version      ${version}
// @description  ${description}
// @author       ${author}
// @require      ${require}
// @match        ${match}
// @run-at       ${run_at}
// @grant        ${grant}
// ==/UserScript==
`;

var betterdiscord_header = `//META{"name":"${name}"}*//

var plugin = function(){};

plugin.prototype.getName = function() {
    return "${name}";
};

plugin.prototype.getDescription = function() {
    return "${description}";
};

plugin.prototype.getVersion = function() {
    return "${version}";
};

plugin.prototype.getAuthor = function() {
    return "${author}";
};

`;


var bd_config = {
    context: path.join("plugins", name),
    entry: "./entry.bd.js",
    output: {
        path: "dist",
        filename: name + ".plugin.js",
        library: name,
    },
    plugins: [
        new webpack.BannerPlugin(betterdiscord_header, {'raw': true}),
    ],
};

var us_config = {
    context: path.join("plugins", name),
    entry: "./entry.us.js",
    output: {
        path: "dist",
        filename: name + ".user.js",
        library: "plugin",
    },
    plugins: [
        new webpack.BannerPlugin(userscript_header, {raw: true}),
    ],
}

module.exports = {
    bd_config: bd_config,
    us_config: us_config,
};
