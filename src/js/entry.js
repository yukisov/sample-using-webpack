var _ = require('underscore');

// CSSを取り込む
require('../css/entry');

// foo.jsを利用する
var foo = require('./foo');
console.log(foo.hello());

// Use templates/foo.html
var html_foo = require('html!../templates/foo.html'),
    compiled = _.template(html_foo),
    html = compiled({ name: "Tom" });
console.log(html_foo);
console.log(html);
document.getElementById('d1').innerHTML = html;
