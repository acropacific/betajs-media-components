Scoped.define("module:VideoPlayer.Dynamics.Playbutton", [
    "dynamics:Dynamic",
    "module:Assets"
], [
    "dynamics:Partials.ClickPartial"
], function(Class, Assets, scoped) {
    return Class.extend({
            scoped: scoped
        }, function(inherited) {
            return {

                template: "<%= template(dirname + '/playbutton.html') %>",

                attrs: {
                    "css": "ba-videoplayer",
                    "rerecordable": false,
                    "submittable": false
                },

                functions: {

                    play: function() {
                        this.trigger("play");
                    },

                    submit: function() {
                        this.set("submittable", false);
                        this.set("rerecordable", false);
                        this.trigger("submit");
                    },

                    rerecord: function() {
                        this.trigger("rerecord");
                    }

                }

            };
        })
        .register("ba-videoplayer-playbutton")
        .registerFunctions({ /*<%= template_function_cache(dirname + '/playbutton.html') %>*/ })
        .attachStringTable(Assets.strings)
        .addStrings({
            "tooltip": "Click to play.",
            "rerecord": "Redo",
            "submit-video": "Confirm video"
        });
});