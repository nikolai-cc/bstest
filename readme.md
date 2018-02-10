# bstest: BrowSerTEST

## An extremely simple and light-weight drop-in browser test banner.

So you're building a project website using super cool new CSS features and you don't feel like adding Polyfills or gracefull fallbacks for your grandma surfing the web on an orange iBook running Netscape Navigator on Mac OS9, or someone who's Tamagotchi based browser does not support JavaScript. 

Drop in these ~1117 bytes of html and javascript at the end of your \<body> and don't care about the rest.


### The HTML:

```html
<style>#bstest:checked + #bstestlabel {display: none;}</style><input type="checkbox" class="bstest" id="bstest" style="display:none"><label for="bstest" class="bstest" id="bstestlabel" style="height: 15px; font-family: sans-serif; position: absolute; top: 0; left: 0; background: tomato; color: white; width: 100%; text-align: center; font-size: 14px;">Please <a href="http://google.com/?q=how to enable javascript" style="color: darkred; font-weight: bold; text-decoration: none;">enable JavaScript</a> for a correctly working website.<span style="position:absolute;right:0">(Click to dismiss)</span></label>
```

This generates a 15px banner at the top of the page with a message that the user should enable JavaScript. It is dismissable on click via CSS.

### The JavaScript: 

```javascript
    document.addEventListener('DOMContentLoaded', function() {
        if(window.CSS.supports("display", "grid")){
            document.querySelectorAll(".bstest").forEach(function(d) {d.parentNode.removeChild()});
        } else {
            document.querySelector('#bstestlabel').innerHTML = 'This site was built for modern, safe browsers. Please <a href=\"http://whatbrowser.org/\" style=\"color: darkred; font-weight: bold; text-decoration: none;\">update your browser</a> for a correctly working website.<span style="position:absolute;right:0">(Click to dismiss)</span>';
        }
    });
 ```
 
 If the user has JavaScript enabled, it tests the browser for supporting a certain CSS variable using `window.CSS.supports()`. By default it's set to supporting everything from `display: grid`. Change these values in order to change the minimum browser requirements.
 
### Note:
 
 The minimum requrement for changing the banner text and dismissing it on click is IE9. This means that everyone running IE8 or lower will get an undismissable message to enable JavaScript. 
 
 Then again, if somebody is still running IE8 or lower, they probably don't deserve your website. 
