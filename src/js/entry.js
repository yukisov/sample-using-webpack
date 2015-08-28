/* global __DEV__ */
/*global __PRERELEASE__*/
/*global __FOO__*/
/*global __BAR__*/
/* global VERSION */
/* global BERSION */
/*global TWO*/

// CSSを取り込む
require('../css/entry');

// foo.jsを利用する
var foo = require('./foo');
console.log(foo.hello());

console.log('__DEV__', typeof __DEV__, __DEV__);
console.log('__PRERELEASE__', typeof __PRERELEASE__, __PRERELEASE__);
console.log('__FOO__', typeof __FOO__, __FOO__);
console.log('__BAR__', typeof __BAR__, __BAR__);
console.log('VERSION', typeof VERSION, VERSION);
console.log('BERSION', typeof BERSION, BERSION);
console.log('TWO', typeof TWO, TWO);
console.log('window', typeof window, window);

// __DEV__ に false をセットして minify すると、不要なコードとして以下は削除される。
if (__DEV__) {
  console.log('now in DEV!');
}
