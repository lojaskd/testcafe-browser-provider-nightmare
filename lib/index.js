'use strict';

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nightmare = require('nightmare');

var _nightmare2 = _interopRequireDefault(_nightmare);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add debug namespace
/**
 * Testcafe browser provider plugin for the nightmare browser automation library.
 */
var debug = (0, _debug2.default)('testcafe-browser-provider-nightmare');

exports.default = {
    // map with open page references
    nightmareInstances: {},

    // multiple browsers support
    isMultiBrowser: false,

    // open new page in browser
    openBrowser: function openBrowser(id, pageUrl) {
        var _this = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var conf;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            conf = {
                                show: debug.enabled,
                                openDevTools: debug.enabled
                            };


                            _this.nightmareInstances[id] = (0, _nightmare2.default)(conf);

                            // Sets the useragent used by electron.
                            // Mobile Chrome for Android - https://developer.chrome.com/multidevice/user-agent
                            _this.nightmareInstances[id].useragent('Mozilla/5.0 (Linux; <Android Version>; <Build Tag etc.>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Mobile Safari/<WebKit Rev>');

                            _context.next = 5;
                            return _this.nightmareInstances[id].goto(pageUrl);

                        case 5:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this);
        }))();
    },


    // close given page in browser
    closeBrowser: function closeBrowser(id) {
        var _this2 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var nightmare;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            nightmare = _this2.nightmareInstances[id];


                            delete _this2.nightmareInstances[id];

                            _context2.next = 4;
                            return nightmare.end();

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        }))();
    },


    // resize browser window to given size
    resizeWindow: function resizeWindow(id, width, height) {
        var _this3 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return _this3.nightmareInstances[id].viewport(width, height);

                        case 2:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this3);
        }))();
    },


    // take screenshot of given page in browser
    takeScreenshot: function takeScreenshot(id, screenshotPath) {
        var _this4 = this;

        return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return _this4.nightmareInstances[id].screenshot(screenshotPath);

                        case 2:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, _this4);
        }))();
    }
};
module.exports = exports['default'];