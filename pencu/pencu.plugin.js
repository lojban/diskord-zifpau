//META{"name":"pencu"}*//



var pencu = function() {};

(function() {
    "use strict";

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

    var async_url = "https://rawgit.com/lojban/diskord-zifpau/master/pencu/";

    pencu.prototype.getScript = function(filename, handler) {
        $.getScript(async_url + filename, handler);
    }

    pencu.prototype.load = function() {
        helpers = ["camxes.js", "definitions.js", "lumci.js", "zbasu.js"];

        var load = function() {
            if (helpers.length) {
                var next_helper = helpers.shift();
                $.getScript(next_helper, handler);
            } else {
                fixDefinitions(definitions);
                initJQueryPlugins($);
                console.log("la pencu ku tolcanci");
            }
        }

        load();
    };

    pencu.prototype.unload = function() {
        console.log("la pencu ku canci");
    };

})();
