document.addEventListener('DOMContentLoaded', function() {
    if(window.CSS.supports("display", "grid")){
        document.querySelectorAll(".bstest").forEach(function(d) {d.parentNode.removeChild()});
    } else {
        document.querySelector('#bstestlabel').innerHTML = 'This site was built for modern, safe browsers. Please <a href=\"http://whatbrowser.org/\" style=\"color: darkred; font-weight: bold; text-decoration: none;\">update your browser</a> for a correctly working website.<span style="position:absolute;right:0">(Click to dismiss)</span>';
    }
});