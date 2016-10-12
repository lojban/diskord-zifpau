var main = require('./src/main');

var debug = true;
window.log = function(m) {
    if (debug === true) {
        console.log(m);
    }
};

plugin.prototype.getSettingsPanel = function() {
    return "";
};

plugin.prototype.load = main.load;

plugin.prototype.unload = main.unload;

plugin.prototype.start = main.start;

plugin.prototype.stop = main.stop;

plugin.prototype.observer = main.observer;

module.exports = plugin;
