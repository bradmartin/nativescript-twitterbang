/**************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * Pull requests are welcome. Enjoy!
 *************************************************************************************/

import * as app from 'application';
import { isAndroid } from 'platform';

declare var xyz: any;
const SmallBang = xyz.hanks.library.SmallBang;

export function TwitterBang(view) {
    if (isAndroid && view.android) {
        let mSmallBang = new SmallBang.attach2Window(app.android.foregroundActivity);
        mSmallBang.bang(view.android);
    }
}