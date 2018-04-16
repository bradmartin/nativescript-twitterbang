import * as app from 'tns-core-modules/application';
import { device } from 'tns-core-modules/platform';
import { Color } from 'tns-core-modules/color';
import { TwitterBang } from 'nativescript-twitterbang';

export function pageLoaded(args) {
  const page = args.object;
  // Change statusbar color on Lollipop
  if (app.android && device.sdkVersion >= '21') {
    const window = app.android.startActivity.getWindow();
    window.setStatusBarColor(new Color('#D50000').android);
  }
}

export function bangThis(args) {
  try {
    const x = args.object as TwitterBang;
    console.log('twitterbang x', x);
    console.log('dotColors', x.dotColors);

    x.bang().then(() => {
      console.log('bang then');
    });
  } catch (e) {
    console.log(e);
  }
}
