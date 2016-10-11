(function() {
    fixDefinition = function(def) {
        if (/;/.test(def)) {
            // split at ; and recombine
            return def.split(';').map(fixDefinition).join(';');
        }

        // remove all $ signs
        def = def.replace(/\$/g, '');

        // magic regexes
        var termMatch = /[A-Za-z]+_?{?(\d+)}?(\s*[=~]\s*[A-Za-z]+_?{?\d+}?)*/g;
        var xTermMatch = /[Xx]_?{?(\d+)}?(\s*[=~]\s*[A-Za-z]+_?{?\d+}?)*/g;

        if (xTermMatch.test(def)) {
            // get the list of matches and see if they're out of order
            var match;
            var n = 1;
            xTermMatch.lastIndex = 0;
            while ((match = xTermMatch.exec(def)) !== null) {
                if (match[1] !== '' + n) {
                    // places are out of order
                    // hope that all terms have [a-z]_n in them as first thing with correct n
                    return def.replace(termMatch, 'x$1');
                }
                n += 1;
            }
            // places are in order; rely on fixer below to fix stuff
        }

        if (!termMatch.test(def)) {
            return def; // it's probably fine! non-selbri definition
        }

        // replace all instances of termMatch with placeholder
        def = def.replace(termMatch, '~!~');
        var x_index = 1;
        while (/~!~/.test(def)) {
            def = def.replace(/~!~/, 'x' + x_index);
            x_index += 1;
        }
        return def;
    };

    fixDefinitions = function(definitions) {
        for (var i = 0; i < definitions.length; i++) {
            var w = definitions[i].w;
            definitions[i].d = fixDefinition(definitions[i].d);
        }
    };

    fixDefinitions(definitions);
    console.log("ba'o lumci lo se valsi");

})();
