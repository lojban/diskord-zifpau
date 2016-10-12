function observer(mutation) { log("observer"); };

function load() { log("load"); }

function unload() { log("unload"); }

function start() { log("start"); }

function stop() { log("stop"); };

module.exports = {
    'load': load,
    'unload': unload,
    'start': start,
    'stop': stop,
    'observer': observer,
}
