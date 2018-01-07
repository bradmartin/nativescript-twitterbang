[![npm](https://img.shields.io/npm/v/nativescript-twitterbang.svg)](https://www.npmjs.com/package/nativescript-twitterbang)
[![npm](https://img.shields.io/npm/dt/nativescript-twitterbang.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-twitterbang)
[![GitHub stars](https://img.shields.io/github/stars/bradmartin/nativescript-twitterbang.svg)](https://github.com/bradmartin/nativescript-twitterbang/stargazers)
[![PayPal Donate](https://img.shields.io/badge/Donate-PayPal-ff4081.svg)](https://www.paypal.me/bradwayne88)


# NativeScript-TwitterBang :heartbeat:

NativeScript plugin for Android to use native Twitter animation for the exploding heart. 
This library uses [SmallBang by hanks-zyh](https://github.com/hanks-zyh/SmallBang) for the native animation.

### TwitterBang Usage 

![TwitterBang](twitterBang.gif)

## Installation
`npm install nativescript-twitterbang`

## Usage

### XML:
```XML
 <button text="This" tap="bangThis" margin="10" />
```


### TS:
```typescript
import { TwitterBang, ITwitterBangOptions } from 'nativescript-twitterbang';

// args.object is the View/component that triggered the tap event
public bangThis(args) {
    let opts: ITwitterBangOptions = {
        view: args.object,
        dotNumber: 40,
        colors: [ '#3489db', '#ff4081', '#fff000' ]
    }
    // Execute the TwitterBang() method passing the options object.
    TwitterBang(opts);
}
```


### JS:
```javascript
var TwitterBang = require("nativescript-twitterbang").TwitterBang;

// args.object is the View/component that triggered the tap event
function bangThis(args) {
     let opts = {
        view: args.object,
        dotNumber: 40,
        colors: [ '#3489db', '#ff4081', '#fff000' ]
    }
    // Execute the TwitterBang() method passing the options object.
    TwitterBang(opts);
}
exports.bangThis = bangThis; 
```


