var app = require("application");

function bang(view) {
    try {
        if (app.android) {
            var SmallBang = xyz.hanks.library.SmallBang;
            var mSmallBang = new SmallBang.attach2Window(app.android.foregroundActivity);
            mSmallBang.bang(view);
        } else {
            console.log('xyz.hanks.library.SmallBang is an Android only library.');
        }
    } catch (ex) {
        console.log("Error in twitterbang.bang(): " + ex);
    }
}
exports.bang = bang;