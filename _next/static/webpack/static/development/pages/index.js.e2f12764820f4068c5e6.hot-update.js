webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }



var _require = __webpack_require__(/*! @octokit/rest */ "./node_modules/@octokit/rest/dist-web/index.js"),
    Octokit = _require.Octokit;

var octokit = new Octokit({
  auth: '501d530a159fc4fb7f946263b91fc509a11c6d85'
});

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      items: [],
      posts: [],
      downloads: [],
      postsMax: 20,
      downloadsMax: 20,
      detail: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.App = this;
      this.octokit = octokit;
      this.getData();
    }
  }, {
    key: "getData",
    value: function () {
      var _getData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var res, items, posts, downloads;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.octokit.repos.getContent({
                  owner: 'ryosuzuki',
                  repo: 'monitor-db',
                  path: 'db.json',
                  headers: {
                    'If-None-Match': ''
                  }
                });

              case 2:
                res = _context.sent;

                try {
                  items = JSON.parse(atob(res.data.content));
                  items = items.reverse();
                  console.log(items);
                  posts = items.filter(function (item) {
                    return item.type == 'post';
                  });
                  downloads = items.filter(function (item) {
                    return item.type !== 'post';
                  });
                  this.setState({
                    items: items,
                    posts: posts,
                    downloads: downloads
                  });
                } catch (err) {
                  console.log(err);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _getData.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "onClick",
    value: function onClick(type, index) {
      console.log(type, index);
    }
  }, {
    key: "timeFormat",
    value: function timeFormat(timestamp) {
      var time = new Date(timestamp);
      var year = time.getFullYear();
      var month = '' + (time.getMonth() + 1);
      var day = '' + time.getDate();
      var hour = '' + time.getHours();
      var min = '' + time.getMinutes();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;
      return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hour, ":").concat(min);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("title", null, "Monitor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("style", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui two column centered grid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "column"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Monitor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Post"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "ui unstackable table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: "status "
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: "timestamp"
      }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Blog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, this.state.posts.slice(0, this.state.postsMax).map(function (post, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          key: i,
          className: post.error ? 'negative' : 'positive',
          onClick: _this2.onClick.bind(_this2, 'post', i)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "status center aligned"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: post.error ? 'icon close' : 'icon checkmark'
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "timestamp"
        }, _this2.timeFormat(post.timestamp)), !post.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          "data-label": "blog"
        }, post.data.item.article), post.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          "data-label": "blog"
        }, post.data.blog));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "downloads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("table", {
        className: "ui unstackable table"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: "status"
      }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", {
        className: "timestamp"
      }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("th", null, "Key"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tbody", null, this.state.downloads.slice(0, this.state.downloadsMax).map(function (download, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("tr", {
          key: i,
          className: download.error ? 'negative' : 'positive'
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "status center aligned"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: download.error ? 'icon close' : 'icon checkmark'
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          className: "timestamp"
        }, _this2.timeFormat(download.timestamp)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("td", {
          "data-label": "key"
        }, download.data.key));
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "header"
      }, "Header"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", null, "fafjaeojfaoie")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "actions"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui approve button"
      }, "Approve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui button"
      }, "Neutral"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ui cancel button"
      }, "Cancel"))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e2f12764820f4068c5e6.hot-update.js.map