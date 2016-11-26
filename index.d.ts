import { View } from 'ui/core/view';

/**
 * Execute the Twitter bang animation. *** ANDROID ONLY***
 * The plugin should not cause a crash or require platform specific logic.
 * @param {ITwitterBangOptions} - The options interface object.
 */
export function TwitterBang(opts: ITwitterBangOptions);


/**
 * Options for the TwitterBang method.
 */
export interface ITwitterBangOptions {
    view: View;
    dotNumber?: number;
    colors?: Array<string>;
}