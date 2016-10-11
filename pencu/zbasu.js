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

    function makeSelpehu(valsi, text) {
        var cleaned = valsi.replace(/[^\w']/g, '');
        if (text == undefined) {
            text = valsi;
        }
        var selpehu = $("<a>", {
            href: "http://vlasisku.lojban.org/vlasisku/" + cleaned,
            class: "pencu-atki",
            target: "_blank",
            title: getDefinition(cleaned),
            text: text,
        }).prop('outerHTML');
        return selpehu.toString();
    };

    function makeVinpa(content) {
        // Create and insert tooltip
        var vinpa = $("<div>")
            .append(content)
            .addClass("tooltip tooltip-top tooltip-normal");
        return vinpa;
    }

    function positionVinpa(pencu, vinpa) {
        // Position the tooltip
        var position = pencu.offset();
        position.top -= vinpa.height() + 20;
        position.left += pencu.width() / 2 - vinpa.width() / 2 - 10;
        vinpa.offset(position);
    }

    function initJQueryPlugins($) {
        $.fn.setupVinpa = function() {
            // find children with a title attribute
            return this.find("[title]").each(function() {
                // grab the title
                var title = $(this).attr("title");
                // add marker class and remove title
                $(this).addClass("pencu-vinpa").removeAttr("title");
                $(this).on("mouseover.pencu-vinpa", function() {
                    var vinpa = makeVinpa(title);
                    $(".tooltips").append(vinpa);
                    positionVinpa($(this), vinpa);
                    // Set a handler to destroy the tooltip
                    $(this).on("mouseout.pencu-vinpa", function() {
                        // remove this handler
                        $(this).off("mouseout.pencu-vinpa");
                        vinpa.remove();
                    });
                });
            });
        };
    }


    function updateToken(tokens, i, token) {
        try {
            // parse a token into lojban
            var parse = camxes.parse(token.replace(/[^\w'\.]/g, ''));
            // bail if no parse possible
            if (parse.length === 0) {
                return;
            }

            var parts = []; // each token may contain multiple adjacent valsi
            for (var k = 0; k < parse.length; k++) {
                var valsi = parse[k][1];
                var selmaho = parse[k][0];
                // don't handle cmevla or fu'ivla
                if (selmaho == "cmevla") {
                    throw selmaho;
                } else if (selmaho == "fu'ivla") {
                    throw selmaho;
                } else if (selmaho == "lujvo") {
                    var rafsi = valsi.split("-");
                    for (var j = 0; j < rafsi.length; j++) {
                        rafsi[j] = rafsi[j].replace("r", "");
                    }
                    for (var j = 0; j < rafsi.length; j++) {
                        var current_rafsi = rafsi[j];
                        var entries = definitions.filter(function(o) {
                            return (o.r != undefined &&
                                o.r.indexOf(current_rafsi) > -1);
                        });
                        if (entries.length > 0) {
                            var gismu = entries[0].w;
                            if (j > 0) {
                                var prev_rafsi = rafsi[j - 1];
                                var exp = prev_rafsi + "(.)" + current_rafsi;
                                var pattern = new RegExp(exp, 'g');
                                var match = pattern.exec(token);
                                if (match != null && match.length > 1) {
                                    parts.push(match[1]);
                                }
                            }
                            parts.push(makeSelpehu(gismu, current_rafsi));
                        }
                    }
                } else {
                    parts.push(makeSelpehu(valsi));
                }
            }
            var result = parts.join("");
            tokens[i] = result;
        } catch (err) {
            console.log("ERROR:");
            console.log(err);
            tokens[i] = escapeHtml(tokens[i]);
        }
    };

    function processText(text) {
        // skip empty messagesa
        if ($.trim(text) == '') {
            return text;
        }
        // split the message on whitespace into tokens
        var tokens = text.split(/(\S+)/g)
            // bail if there are no tokens
        if (tokens == null) {
            return text;
        }
        // update each token
        $.each(tokens, function(i, token) {
            updateToken(tokens, i, token);
        });
        // update message with new tokens
        var result = tokens.join("");
        return result;
    }

    function getMessages(mutation) {
        var messages = mutationFind(mutation, ".message-content").not(":has(.pencu-atki)");
        // if (messages.length == 0) {
        //     // this is needed because the DOM on OSX is subtlely different
        //     messages = mutationFind(mutation, ".message-text").not(":has(.pencu-atki)");
        // }
        return messages;
    };

    pencu.prototype.stop = function() {
        // Swap every emote back to its original text
        $(".pencu-atki").each(function() {
            var selpehu = $(this);
            selpehu.replaceWith(document.createTextNode(selpehu.text()));
        });
        console.log("la pencu ku sisti");
    };

    pencu.prototype.observer = function(mutation) {
        console.log("Mutation observed");
        var messages = getMessages(mutation);
        messages.each(function() {
            var $this = $(this);
            if ($this.hasClass('pencu-atki')) {
                return;
            }
            $this.addClass('pencu-atki');
            var contents = $this.contents();
            var new_contents = [];
            for (var i = 0; i < contents.length; i++) {
                var child = contents[i];
                if (child.nodeName == "#text") {
                    new_contents.push(processText(child.textContent));
                } else if (child.nodeName != "#comment") {
                    new_contents.push($(child).html());
                }

            }
            $this.html(new_contents.join(""));
        });
        messages.setupVinpa();
    };
    console.log("zbasu loaded!");

})();
