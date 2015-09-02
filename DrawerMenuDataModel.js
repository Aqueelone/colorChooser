var DrawerMenuDataModel = FPDataModel.extend({
    init: function() {
        this._super();
        this.setData([
            {
                title: "Blue",
                icon: "ic_blue",
                id: 0
            }, {
                title: "Yellow",
                icon: "ic_yellow",
                id: 1
            }, {
                title: "Black",
                icon: "ic_black",
                id: 2
            }
        ]);
    }
});
