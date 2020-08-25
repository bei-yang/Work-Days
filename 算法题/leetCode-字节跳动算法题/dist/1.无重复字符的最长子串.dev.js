"use strict";

var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var num = 0,
      res = 0,
      m = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      n = _step.value;

      if (m.indexOf(n) === -1) {
        m += n;
        num++;
        res = Math.max(num, res);
      } else {
        m += n;
        m = m.slice(m.indexOf(n) + 1);
        num = m.length;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return res;
};

var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var num = 0;
  var res = 0;
  var m = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = s[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      n = _step2.value;

      if (m.indexOf(n) === -1) {
        m += n;
        num++;
        res = Math.max(num, res);
      } else {
        m += n;
        m = m.slice(m.indexOf(n) + 1);
        num = m.length;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return res;
};

var lengthOfLongestSubstring = function lengthOfLongestSubstring(s) {
  var num = 0;
  var res = 0;
  var m = '';
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = s[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      n = _step3.value;

      if (m.indexOf(n) === -1) {
        m += n;
        num++;
        res = Math.max(num, res);
      } else {
        m += n;
        m = m.slice(m.indexOf(n) + 1);
        num = m.length;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return res;
};