url-seo-scrubber
==================

Takes a string and formats it for a url.  Use this to format titles for SEO friendly urls.

## Example

``javascript
var scrub = require('url-seo-scrubber');

var clean = scrub('Is this: thing - on?');

console.log(clean);

// ===> "is-this-thing-on"

```
