'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('react');
var react__default = _interopDefault(react);
var core = require('@emotion/core');
var framerMotion = require('framer-motion');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;"
} : {
  name: "13j9o15-Switch",
  styles: "width:100px;height:50px;background:whitesmoke;border-radius:50px;position:relative;;label:Switch;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjYyIsImZpbGUiOiJTd2l0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlT250YXAgPSAoKT0+e1xuICAgIHNldFN0YXRlKCFzdGF0ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT0nY29udGFpbmVyJ1xuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBgfVxuICAgICAgb25UYXA9e2hhbmRsZU9udGFwfVxuICAgID5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYmFsbCdcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJveWFsYmx1ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6ICR7c3RhdGUgPyAndW5zZXQnIDogMH07XG4gICAgICAgICAgcmlnaHQ6ICR7c3RhdGUgPyAwIDogJ3Vuc2V0J307XG4gICAgICAgIGB9XG4gICAgICAgIHBvc2l0aW9uVHJhbnNpdGlvblxuICAgICAgPjwvbW90aW9uLmRpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoXG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Switch = function Switch() {
  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOntap = function handleOntap() {
    setState(!state);
  };

  return core.jsx(framerMotion.motion.div, {
    className: "container",
    css: _ref,
    onTap: handleOntap
  }, core.jsx(framerMotion.motion.div, {
    className: "ball",
    css:
    /*#__PURE__*/
    core.css("width:50px;height:50px;background:royalblue;border-radius:50%;position:absolute;left:", state ? 'unset' : 0, ";right:", state ? 0 : 'unset', ";;label:Switch;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IFN3aXRjaCA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVPbnRhcCA9ICgpPT57XG4gICAgc2V0U3RhdGUoIXN0YXRlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPSdjb250YWluZXInXG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGB9XG4gICAgICBvblRhcD17aGFuZGxlT250YXB9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPSdiYWxsJ1xuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogcm95YWxibHVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogJHtzdGF0ZSA/ICd1bnNldCcgOiAwfTtcbiAgICAgICAgICByaWdodDogJHtzdGF0ZSA/IDAgOiAndW5zZXQnfTtcbiAgICAgICAgYH1cbiAgICAgICAgcG9zaXRpb25UcmFuc2l0aW9uXG4gICAgICA+PC9tb3Rpb24uZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hcbiJdfQ== */")),
    positionTransition: true
  }));
};

exports.Switch = Switch;
