var ColorYellowViewController = FPObject.extend({
    init: function() {
        this._super();
    },
    showInWindow: function(wnd) {
        var self = this;
        if (!self.colorYellowView) {
            var uilLoader = new FPUILoader();
            uilLoader.loadXML({
                files: ["yellow_row.xml"],
                success: function (views) {
                    self.colorYellowView = views["yellow_row.xml"];
                    wnd.setLayout(self.colorYellowView);
                }
            });
        } else {
            wnd.setLayout(self.colorYellowView);
        }
    }
});
