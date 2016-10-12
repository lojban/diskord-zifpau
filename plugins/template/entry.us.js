var main = require('./src/main');

var debug = true;
window.log = function(m) {
    if (debug === true) {
        console.log(m);
    }
};

var plugin = function(){};

plugin.prototype.load = main.load;

plugin.prototype.start = main.start;

plugin.prototype.observer = main.observer;

plugin = new plugin();
plugin.load();
plugin.start();

new MutationObserver(function (mutations, observer) {
    mutations.forEach(function(mutation){
        plugin.observer(mutation); });
}).observe(document, { childList:true, subtree:true });


module.exports = plugin;
