var MainWindow = FPDrawerWindow.extend({
    init: function() {
        this._super();
        var self = this;
        var uiLoader = new FPUILoader();
        uiLoader.loadXML({
            files : ["main.xml", "drawer.xml"],
            success: function(views) {
                self.setTitle("Color Chooser");
                self.setTheme({
                    primaryColor: "#11036b",
                    accentColor: "#0000ff"
                });

                var drawerView = views["drawer.xml"];
                self.setDrawerLayout(drawerView);

                var menuListView = drawerView.getViewByName("drawer_list_view");
                var menuDataModel = new DrawerMenuDataModel();
                menuListView.setDataModel(menuDataModel);

                menuListView.addEventListener({
                    eventName: "onItemClick",
                    callback: function(item) {
                        switch (item.id) {
                            // blue
                            case 0: {
                                if (!self.colorBlueController) {
                                    self.colorBlueController = new ColorBlueViewController();
                                }
                                self.colorBlueController.showInWindow(self);
                                break;
                            }
                            // yellow
                            case 1: {
                                if (!self.colorYellowController) {
                                    self.colorYellowController = new ColorYellowViewController();
                                }
                                self.colorYellowController.showInWindow(self);
                                break;
                            }
                            // black
                            case 1: {
                                if (!self.colorBlackController) {
                                    self.colorBlackController = new ColorBlackViewController();
                                }
                                self.colorBlackController.showInWindow(self);
                                break;
                            }
                        }
                    }
                });
            },
            failure: function(error) {
                alert(error);
            }
        });
    }
});
