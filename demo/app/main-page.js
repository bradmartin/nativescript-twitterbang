"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
var color_1 = require("tns-core-modules/color");
function pageLoaded(args) {
    var page = args.object;
    if (app.android && platform_1.device.sdkVersion >= '21') {
        var window_1 = app.android.startActivity.getWindow();
        window_1.setStatusBarColor(new color_1.Color('#D50000').android);
    }
}
exports.pageLoaded = pageLoaded;
function bangThis(args) {
    try {
        var x = args.object;
        console.log('twitterbang x', x);
        console.log(x.dotColors);
        x.bang().then(function () {
            console.log('bang then');
        });
    }
    catch (e) {
        console.log(e);
    }
}
exports.bangThis = bangThis;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQW9EO0FBQ3BELHNEQUFtRDtBQUNuRCxnREFBK0M7QUFHL0Msb0JBQTJCLElBQUk7SUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUV6QixJQUFJLEdBQUcsQ0FBQyxPQUFPLElBQUksaUJBQU0sQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1FBQzVDLElBQU0sUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3JELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN4RDtBQUNILENBQUM7QUFQRCxnQ0FPQztBQUVELGtCQUF5QixJQUFJO0lBQzNCLElBQUk7UUFDRixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQVpELDRCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvY29sb3InO1xuaW1wb3J0IHsgVHdpdHRlckJhbmcgfSBmcm9tICduYXRpdmVzY3JpcHQtdHdpdHRlcmJhbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzKSB7XG4gIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcbiAgLy8gQ2hhbmdlIHN0YXR1c2JhciBjb2xvciBvbiBMb2xsaXBvcFxuICBpZiAoYXBwLmFuZHJvaWQgJiYgZGV2aWNlLnNka1ZlcnNpb24gPj0gJzIxJykge1xuICAgIGNvbnN0IHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKG5ldyBDb2xvcignI0Q1MDAwMCcpLmFuZHJvaWQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYW5nVGhpcyhhcmdzKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeCA9IGFyZ3Mub2JqZWN0IGFzIFR3aXR0ZXJCYW5nO1xuICAgIGNvbnNvbGUubG9nKCd0d2l0dGVyYmFuZyB4JywgeCk7XG4gICAgY29uc29sZS5sb2coeC5kb3RDb2xvcnMpO1xuXG4gICAgeC5iYW5nKCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnYmFuZyB0aGVuJyk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuIl19