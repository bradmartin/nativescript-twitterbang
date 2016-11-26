/**************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * Pull requests are welcome. Enjoy!
 *************************************************************************************/

import * as app from 'application';
import { isAndroid } from 'platform';
import { Color } from 'color';
import { ITwitterBangOptions } from './index';

declare var xyz: any;
const SmallBang = xyz.hanks.library.SmallBang;

export function TwitterBang(opts: ITwitterBangOptions) {
    if (isAndroid && opts.view.android) {
        let mSmallBang = new SmallBang.attach2Window(app.android.foregroundActivity);

        let androidColorArray: Array<number> = Array<number>();

        /// set colors for dots
        if (opts.colors && opts.colors.length >= 2) {
            opts.colors.forEach(c => {
                if (Color.isValid(c)) {
                    let parsedColor = new Color(c).android;
                    androidColorArray.push(parsedColor);
                }

            })
            mSmallBang.setColors(androidColorArray);
        }

        /// set dotNumber count
        if (opts.dotNumber && opts.dotNumber >= 1) {
            mSmallBang.setDotNumber(opts.dotNumber);
        }

        mSmallBang.bang(opts.view.android);
    }
}