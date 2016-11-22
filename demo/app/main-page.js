var app = require("application");
var platformModule = require("platform");
var color = require("color");
var TwitterBang = require("nativescript-twitterbang").TwitterBang;

function pageLoaded(args) {
    var page = args.object;
    // Change statusbar color on Lollipop
    if (app.android && platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new color.Color("#D50000").android);
    }
}
exports.pageLoaded = pageLoaded;

function bangThis(args) {
    var view = args.object;
    TwitterBang(view);
}
exports.bangThis = bangThis;

function bangHeart(args) {
    var view = args.object;
    TwitterBang(view);
    args.object.src = "~/images/twitterHeart.png";
}
exports.bangHeart = bangHeart;