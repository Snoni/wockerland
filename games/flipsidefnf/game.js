var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
    $('#gameframe').contents().find('body').html('<noscript>This webpage makes extensive use of JavaScript. Please enable JavaScript in your web browser to view this page.</noscript> <div id="openfl-content"></div> <script type="text/javascript"> lime.embed ("Funkin", "openfl-content", 1280, 720, { parameters: {} }); </script>');
});