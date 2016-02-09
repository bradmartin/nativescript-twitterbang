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
    // args.object.android returns the native Android widget from the tap event.
    var view = args.object.android;
    // Call .bang() passing the native android view to execute the animation.
    twitterBang.bang(view);

    // If you want to change the image src after the twitter bang() for an <Image> it is easy...
    args.object.src = "~/images/fileName.png";
}
exports.bangThis = bangThis; 
```