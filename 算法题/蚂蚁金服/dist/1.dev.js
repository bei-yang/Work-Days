"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function sortVersion(list) {
  return list.sort(function (a, b) {
    var arr1 = a.split('.');
    var arr2 = b.split('.');
    var i = 0;

    while (true) {
      var a1 = arr1[i];
      var b1 = arr2[i++];
      if (a1 === b1) continue;
      if (!a1 || !b1) return arr1.length - arr2.length;
      return a1 - b1;
    }
  });
}

functio;
console.log(sortVersion(['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']));

var Depository =
/*#__PURE__*/
function () {
  function Depository(options) {
    _classCallCheck(this, Depository);

    // 初始货物
    this.options = options;
  }

  _createClass(Depository, [{
    key: "transferIn",
    value: function transferIn(cargo) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options;

      for (var prop in cargo) {
        if (options[prop]) {
          if (_typeof(options[prop]) === 'object' && _typeof(cargo[prop]) !== 'object') {
            return "".concat(cargo[prop], " + '\u6709\u5B50\u7C7B\u578B\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5B50\u7C7B\u578B'");
          }

          if (_typeof(options[prop]) !== 'object') {
            options[prop] += cargo[prop];
          } else {
            options[prop] = this.transferIn(cargo[prop], options[prop]);
          }
        } else {
          options[prop] = cargo[prop];
        }
      }

      return options;
    }
  }, {
    key: "transferOut",
    value: function transferOut(cargo) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options;

      for (var prop in cargo) {
        if (options[prop]) {
          if (_typeof(options[prop]) === 'object' && _typeof(cargo[prop]) !== 'object') {
            return "".concat(cargo[prop], " + '\u6709\u5B50\u7C7B\u578B\uFF0C\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5B50\u7C7B\u578B'");
          }

          if (_typeof(options[prop]) !== 'object') {
            options[prop] -= cargo[prop];
            if (options[prop] < 0) return "".concat(prop, "\u7206\u4ED3\u4E86");
          } else {
            options[prop] = this.transferOut(cargo[prop], options[prop]);
          }
        } else {
          return "".concat(cargo[prop], "\u5F53\u524D\u5546\u54C1\u4E0D\u5B58\u5728");
        }
      }

      return options;
    }
  }]);

  return Depository;
}();

var product = {
  productA: {
    a: 1,
    b: 2,
    c: {
      c1: 1,
      c2: 3
    }
  },
  productB: {
    e: 6
  }
};
var test = new Depository(product);
console.log(test.transferIn({
  productA: {
    a: 3,
    c: {
      c1: 1,
      c2: 1,
      c3: 1
    }
  }
}));
console.log(test.transferOut({
  productA: {
    a: 7
  }
}));