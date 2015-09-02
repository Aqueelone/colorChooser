var ColorBlueViewController = FPObject.extend({
    init: function() {
        this._super();
    },
    showInWindow: function(wnd) {
        var self = this;
        if (!self.colorBlueView) {
            var uilLoader = new FPUILoader();
            uilLoader.loadXML({
                files: ["blue_row.xml"],
                success: function (views) {
                    self.colorBlueView = views["blue_row.xml"];
                    wnd.setLayout(self.colorBlueView);
                }
            });
        } else {
            wnd.setLayout(self.colorBlueView);
        }
    }
});
