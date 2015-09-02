var ColorBlackViewController = FPObject.extend({
    init: function() {
        this._super();
    },
    showInWindow: function(wnd) {
        var self = this;
        if (!self.colorBlackView) {
            var uilLoader = new FPUILoader();
            uilLoader.loadXML({
                files: ["black_row.xml"],
                success: function (views) {
                    self.colorBlackView = views["black_row.xml"];
                    wnd.setLayout(self.colorBlackView);
                }
            });
        } else {
            wnd.setLayout(self.colorBlackView);
        }
    }
});
