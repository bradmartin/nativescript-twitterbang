import * as app from 'application';
import { isAndroid } from 'platform';

declare var xyz: any;
const SmallBang = xyz.hanks.library.SmallBang;

export function bang(view) {
    if (isAndroid && view.android) {
        let mSmallBang = new SmallBang.attach2Window(app.android.foregroundActivity);
        mSmallBang.bang(view.android);
    }
}