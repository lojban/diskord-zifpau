//META{"name":"pencu"}*//

var pencu = function() {};

(function() {
    "use strict";

    var async_url = "https://rawgit.com/lojban/diskord-zifpau/master/pencu/";
    var helpers = ["camxes.js", "definitions.js", "lumci.js", "zbasu.js"];

    pencu.prototype.getName = function() {
        return "Pencu for Discord";
    };

    pencu.prototype.getDescription = function() {
        return "Lojban hover definitions for Discord";
    };

    pencu.prototype.getVersion = function() {
        return "0.0.1";
    };

    pencu.prototype.getAuthor = function() {
        return "cadgu'a";
    };

    pencu.prototype.getSettingsPanel = function() {
        return "";
    };

    pencu.prototype.getScript = function(filename, handler) {
        $.getScript(async_url + filename, handler);
    }

    pencu.prototype.load = function() {
        var load = function() {
            if (helpers.length) {
                var next_helper = helpers.shift();
                console.log("Downloading " + next_helper);
                $.getScript(async_url + next_helper, load);
            }
        }

        load();
    };

    pencu.prototype.unload = function() {
        console.log("la pencu ku canci");
    };

    pencu.prototype.start = function() {
        console.log("la pencu ku tolsti");
    };

    pencu.prototype.observer = function(mutation) { /* override */ };
    pencu.prototype.stop = function() { /* override */ };

})();

