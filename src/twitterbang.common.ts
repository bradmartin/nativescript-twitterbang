import { ContentView, Property } from 'tns-core-modules/ui/content-view';

export class TwitterBangCommon extends ContentView {
  /**
   * Gets the native [android widget](https://github.com/hanks-zyh/SmallBang) that represents the user interface for this component. Valid only when running on Android OS.
   */
  android: any /* xyz.hanks.library.bang.SmallBangView */;

  /**
   * A comma delimited string of colors to use for the dots in the animation.
   * Must be at least 4 colors.
   * Example: #ff4801,#ff4081,#ff3636,#228289
   */
  dotColors: string;
}

export const dotColorsProperty = new Property<TwitterBangCommon, string>({
  name: 'dotColors'
});
dotColorsProperty.register(TwitterBangCommon);
