include([
	"ui.js",
	"MainWindow.js",
	"DrawerMenuDataModel.js",
	"ColorBlueViewController.js",
	"ColorYellowViewController.js",
	"ColorBlackViewController.js"],
	function() {
		var mainWindow = new MainWindow();
		mainWindow.presentAsRootWindow();
});
