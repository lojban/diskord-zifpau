
(function() {
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': '&quot;',
        "'": '&#39;',
        "/": '&#x2F;'
    };

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function(s) {
            return entityMap[s];
        });
    }

    // Helper function for finding all elements matching selector affected by a mutation
    function mutationFind(mutation, selector) {
        var target = $(mutation.target),
            addedNodes = $(mutation.addedNodes);
        var mutated = target.add(addedNodes).filter(selector);
        var descendants = addedNodes.find(selector);
        var ancestors = target.parents(selector);
        return mutated.add(descendants).add(ancestors);
    }

    // Helper function for finding all elements matching selector removed by a mutation
    function mutationFindRemoved(mutation, selector) {
        var removedNodes = $(mutation.removedNodes);
        var mutated = removedNodes.filter(selector);
        var descendants = removedNodes.find(selector);
        return mutated.add(descendants);
    }

    function positionVinpa(vinpa, selpehu) {
        // Position the tooltip
        var position = selpehu.offset();
        position.top -= vinpa.height() + 20;
        position.left += selpehu.width() / 2 - vinpa.width() / 2 - 10;
        vinpa.offset(position);
    };

    function makeVinpa(selpehu) {
        // Create and insert tooltip
        var vinpa = $("<div>")
            .append(selpehu.attr('title'))
            .addClass("tooltip tooltip-top tooltip-normal");
        selpehu.attr('data-title', selpehu.attr('title'));
        selpehu.removeAttr('title');
        $(".tooltips").append(vinpa);
        positionVinpa(vinpa, selpehu);
        return vinpa;
    };

    function showVinpa() {
        // `this` is a selpehu
        var vinpa = makeVinpa($(this));
        // Set a handler to destroy the tooltip
        $(this).on("mouseout.pencu-vinpa", function() {
            $(this).off("mouseout.pencu-vinpa");
            $(this).attr('title', $(this).attr('data-title'));
            $(this).removeAttr('data-title');
            vinpa.remove();
        });
    };

    var setupVinpa = function() {
        // `this` is a selpehu
        $(this)
            .not(':has(.pencu-vinpa)')
            .addClass('pencu-vinpa')
            .on("mouseover.pencu-vinpa", showVinpa);
    };

    function initJQueryPlugins($) {
        $.fn.setupVinpa = function() {
            // find children with a title attribute
            // not already setup with a vinpa
            return this
                .not(':has(.pencu-vinpa)')
                .each(setupVinpa);
        };
    }

    function makeSelpehu(valsi, text) {
        if (text == undefined) {
            text = valsi;
        }

        var cleaned = valsi.replace(/[^\w']/g, '');
        var selpehu = $("<a>", {
            href: "http://vlasisku.lojban.org/vlasisku/" + cleaned,
            class: "pencu-selpehu",
            target: "_blank",
            title: getDefinition(cleaned),
            text: text,
        }).prop('outerHTML');
        return selpehu;
    };

    function parseRafsi(lujvo, rafsi, n) {
        var new_tokens = [];
        var current_rafsi = rafsi[n];
        var entries = definitions.filter(function(o) {
            return (o.r != undefined && o.r.indexOf(current_rafsi) > -1);
        });
        if (entries.length > 0) {
            var gismu = entries[0].w;
            if (n > 0) {
                var prev_rafsi = rafsi[n - 1];
                var exp = prev_rafsi + "(.)" + current_rafsi;
                var pattern = new RegExp(exp, 'g');
                var match = pattern.exec(lujvo.replace("-", ""));
                if (match != null && match.length > 1) {
                    new_tokens.push(match[1]);
                }
            }
            var new_token = makeSelpehu(gismu, current_rafsi);
            new_tokens.push(new_token);
        } else {
            new_tokens.push(current_rafsi);
        }
        return new_tokens;
    };

    function parseLujvo(lujvo) {
        var new_tokens = []
        var rafsi = lujvo.split("-");
        for (var i = 0; i < rafsi.length; i++) {
            var name = rafsi[i];
            if (name[0] == 'r' || name[name.length - 1] == 'r'){
                rafsi[i] = name.replace("r", "");
            }
        }
        for (var i = 0; i < rafsi.length; i++) {
            var parsed_tokens = parseRafsi(lujvo, rafsi, i);
            new_tokens.push.apply(new_tokens, parsed_tokens);
        }
        return new_tokens;
    };

    function parseToken(token) {
        var new_tokens = [];
        try {
            var tree = camxes.parse(token);
            // the token is 1 or more lojban valsi
            for (var i=0; i<tree.length; i++) {
                var valsi = tree[i][1];
                var selmaho = tree[i][0];
                // don't handle cmevla or fu'ivla
                if (selmaho == "cmevla" || selmaho == "fu'ivla") {
                    throw selmaho;
                }

                var entry = getDefinition(valsi.replace("-", ""));
                if (selmaho == "lujvo" && entry == undefined) {
                    parsed_tokens = parseLujvo(valsi);
                    new_tokens.push.apply(new_tokens, parsed_tokens);
                } else {
                    new_tokens.push(makeSelpehu(valsi));
                }
            }
            return new_tokens;
        } catch (err) {
            // console.log("ERROR:");
            // console.log(err);
            return [token];
        }
    };

    function parseWord(word) {
        var new_tokens = [];

        var tokens = word.split(/([^abcdefgijklmnoprstuvxyz'\.]+)/g);
        for (var i = 0; i < tokens.length; i++) {
            if (tokens[i].trim() == '') {
                continue;
            }
            sub_tokens = parseToken(tokens[i]);
            new_tokens.push.apply(new_tokens, sub_tokens);
        }
        return new_tokens;
    };

    function parseText(text) {
        var new_tokens = [];

        // split the message on whitespace words
        var words = text.split(/(\S+)/g)

        $.each(words, function(i, word) {
            if (word.trim() == '') {
                new_tokens.push(word);
            } else {
                var parsed_tokens = parseWord(word);
                new_tokens.push.apply(new_tokens, parsed_tokens);
            }
        });

        return new_tokens;
    }

    function getMessages(mutation) {
        return mutationFind(mutation, ".message-content")
            .not(".pencu-akti")
            .addClass('pencu-akti');
    };

    pencu.prototype.observer = function(mutation) {
        if ($.fn.setupVinpa == undefined) {
            return;
        }

        var messages = getMessages(mutation);
        messages.each(function() {
            var $this = $(this);
            var contents = $this.contents();
            var new_contents = [];
            for (var i = 0; i < contents.length; i++) {
                var child = contents[i];
                if (child.nodeType == 8) {
                    continue;
                }
                if (child.nodeType == 3) {
                    var tokens = parseText(child.data);
                    for (var j = 0; j < tokens.length; j++) {
                        new_contents.push(tokens[j]);
                    }
                } else {
                    new_contents.push(child.outerHTML);
                }

            }
            var content_results = new_contents.join("");
            $this.html(content_results);
        });
        $('.pencu-selpehu').not('.pencu-vinpa').setupVinpa();
    };

    pencu.prototype.stop = function() {
        // Swap every emote back to its original text
        $(".pencu-selpehu").each(function() {
            var selpehu = $(this);
            selpehu.replaceWith(document.createTextNode(selpehu.text()));
        });
        console.log("la pencu ku sisti");
    };

    pencu.prototype.start = function() {
        console.log("la pencu ku tolsti");
    };

    initJQueryPlugins($);

})();
