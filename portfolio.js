
/*added per https://github.com/twbs/bootstrap/issues/1768#issuecomment-6531466
takes care of the navbar-covers-content when using id*/
var shiftWindow = function() { scrollBy(0, -73) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
