// CSSを取り込む
require('../css/entry');

// foo.jsを利用する
var foo = require('./foo');
console.log(foo.hello());

// Use file-loader
var url = require("file!../img/ESLint_logo.png"),
    img = new Image();
img.src = url;
document.body.appendChild(img);
console.log(url);
