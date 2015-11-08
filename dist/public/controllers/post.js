'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

require('../components/post');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ctx) {
  ctx.layoutVM.$data.html = '\n    <div id="post">\n      <post id="' + ctx.params.id + '"></post>\n    </div>\n  ';

  _vue2.default.nextTick(function () {
    new _vue2.default({
      el: '#post'
    });
  });
};