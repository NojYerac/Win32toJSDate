# Win32toJSDate
> JavaScript library to convert between Win32 FILETIME and JavaScript Date

### Usage
***convert JS date to Win32 date***
```JavaScript
var win32_js_date = require("win32-js-date");

var jsDate = new Date(0);
var win32Date = win32_js_date.toWin(jsDate);
console.log(win32Date);

// Output: 116444736000000000
```

***convert Win32 date to JS date***
```JavaScript
var win32_js_date = require("win32-js-date");

var win32Date = 116444736000000000;
var jsDate = win32_js_date.toJS(win32Date);
console.log(jsDate.toUTCString())

// Output: Thu, 01 Jan 1970 00:00:00 GMT
```
