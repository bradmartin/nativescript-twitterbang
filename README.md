[![npm](https://img.shields.io/npm/v/nativescript-twitterbang.svg)](https://www.npmjs.com/package/nativescript-twitterbang)
[![npm](https://img.shields.io/npm/dt/nativescript-twitterbang.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-twitterbang)

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

### JS:
```JS
var twitterBang = require("nativescript-twitterbang");

// Any tap event in NativeScript has (args) as the passed EventData.
// args.object is the View/component that triggered the tap event
function bangThis(args) {
    // args.object is the widget from the tap event.
    var view = args.object;
    // Execute .bang() method passing the view to execute the animation.
    twitterBang.bang(view);

    // If you want to change the image src after the twitter bang() for an <Image> it is easy...
    args.object.src = "~/images/fileName.png";
}
exports.bangThis = bangThis; 
```
