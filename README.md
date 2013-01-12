# jQuery-View
jQuery-View is a jQuery plugin. Work in jQuery or other compatible library (ex. jQMobi, Zepto).  
"View" of jQuery-View means "V" of MVC framework, It is also syntax sugar of "on" and "off" methods for event bindings.  

## Usage
Add the jquery-view.js below the jQuery in your html.  

    <script src="jquery-x.x.x.js"></script>
    <script src="jquery-view.js"></script>

Then, the "view" object is added in jQuery.  
It has two methods which are "on" and "off".

### $().view.on(object)
To bind events is below.  

    var events = {
            'ready': function () {
                console.log('dom loaded');
            },

            'load@window': function () {
                console.log('window loaded');
            },

            'click@document': function () {
                console.log('document clicked');
            },

            // This code doesn't work in less than IE9. Use "ready" instead.
            'DOMContentLoaded@document': function () {
                console.log('document DOMContentLoaded');
            },

            'click@.menu input': function (evt) {
                evt.stopPropagation();
                console.log(evt.srcElement.value + ' clicked');
            }
        };

    // Register events
    $().view.on(events);

The syntax is "eventname" + "@" + "selector".
Not accepted anything that does not conform to this syntax. However, when use a "DOMContentLoaded" event, use "ready" instead.

### $().view.off(object)
To unbind events is below.  

    // Unregister events.
    $().view.off(events).

## License
jQuery-View is available under the terms of the MIT license.
