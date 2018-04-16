<a align="center" href="https://www.npmjs.com/package/nativescript-twitterbang">
    <h3 align="center">NativeScript-TwitterBang</h3>
</a>
<h4 align="center">NativeScript plugin for Android to use native Twitter animation for the exploding heart. This library uses <a href="https://github.com/hanks-zyh/SmallBang">SmallBang by hanks-zyh</a> for the native animation.</h4>

<p align="center">
    <a href="https://www.npmjs.com/package/nativescript-twitterbang">
        <img src="https://img.shields.io/npm/v/nativescript-twitterbang.svg" alt="npm">
    </a>
    <a href="https://www.npmjs.com/package/nativescript-twitterbang">
        <img src="https://img.shields.io/npm/dt/nativescript-twitterbang.svg?label=npm%20downloads" alt="npm">
    </a>
    <a href="https://github.com/bradmartin/nativescript-twitterbang/stargazers">
        <img src="https://img.shields.io/github/stars/bradmartin/nativescript-twitterbang.svg" alt="stars">
    </a>
     <a href="https://github.com/bradmartin/nativescript-twitterbang/network">
        <img src="https://img.shields.io/github/forks/bradmartin/nativescript-twitterbang.svg" alt="forks">
    </a>
    <a href="https://github.com/bradmartin/nativescript-twitterbang/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/bradmartin/nativescript-twitterbang.svg" alt="license">
    </a>
    <a href="https://paypal.me/bradwayne88">
        <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="donate">
    </a>
    <a href="http://nstudio.io">
      <img src="./images/nstudio-banner.png" alt="nStudio banner">
    </a>
    <h5 align="center">Do you need assistance on your project or plugin? Contact the nStudio team anytime at <a href="mailto:team@nstudio.io">team@nstudio.io</a> to get up to speed with the best practices in mobile and web app development.
    </h5>
</p>

---

### TwitterBang Usage

![TwitterBang](images/twitterBang.gif)

## Installation

`tns plugin add nativescript-twitterbang`

## Notice

As of version 2.0.0, the native library has been updated and the plugin, the API is brand new and breaking.
The `TwitterBang` is not a layout container, similar to `StackLayout, GridLayout` so you can place some UI inside the `TwitterBang` layout. You have to be careful with the layout sizing/position or the animation will be 'jumpy' because of the actual layout size. See the demo markup, usually some alignment of the inner content will solve any 'jumpy' animation by centering the inner content.

## Usage

### XML:

```XML
<GridLayout rows="auto" columns="*, auto">
    <Label col="0" text="Tap the heart >>>" textWrap="true" />
    <TB:TwitterBang col="1" tap="{{ bangThis }}" dotColors="#ff4801,#ff3493,#ff4081,#ff9927">
        <image src="~/images/greyHeart.png" class="center" stretch="none" />
    </TB:TwitterBang>
</GridLayout>
```

### TS:

```typescript
import { TwitterBang } from 'nativescript-twitterbang';

// args.object is the View/component that triggered the tap event
public bangThis(args) {
    const tb = args.object as TwitterBang;
    tb.bang().then(() => {
        console.log('do something after the effect');
    })
}
```

### JS:

```javascript
// args.object is the View/component that triggered the tap event
export function bangThis(args) {
  const x = args.object;
  x.bang().then(function() {
    console.log('after the bang');
  });
}
```
