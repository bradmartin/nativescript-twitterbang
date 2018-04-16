/**************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * Pull requests are welcome. Enjoy!
 *************************************************************************************/
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

import { Color } from 'tns-core-modules/color';
import { TwitterBangCommon, dotColorsProperty } from './twitterbang.common';

declare var xyz;

export class TwitterBang extends TwitterBangCommon {
  private _androidViewId: number;
  public nativeView;

  /**
   * Gets the native [android widget](https://github.com/hanks-zyh/SmallBang) that represents the user interface for this component. Valid only when running on Android OS.
   */
  get android(): any /* xyz.hanks.library.bang.SmallBangView */ {
    return this.nativeView;
  }

  [dotColorsProperty.setNative](value: string) {
    if (value) {
      const x = value.split(',');
      let colorsArray = [] as number[];
      x.forEach(color => {
        const c = new Color(color).android;
        colorsArray.push(c);
      });

      // native library requires at least 4 values
      if (colorsArray.length >= 4) {
        this.nativeView.setDotColors(colorsArray);
      }
    }
  }

  constructor() {
    super();
  }

  public createNativeView() {
    return new xyz.hanks.library.bang.SmallBangView(this._context);
  }

  public initNativeView() {
    this._androidViewId = android.view.View.generateViewId();
    this.nativeView.setId(this._androidViewId);
  }

  public bang() {
    return new Promise((resolve, reject) => {
      try {
        this.android.likeAnimation();
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}
