require('babel-register')()
require("babel-polyfill");

var config = {};

config.ignore = function(filename) {
  if (!(/\/node_modules\//).test(filename)) {

    // if not in node_modules, we want to compile it
    return false; 

  } else if ((/\/node_modules\/react-native\//).test(filename)) {

    // it's RN source code, so we want to compile it
    return false;

  } else {
    // it's in node modules and NOT RN source code
    var modulesToCompileArray = [
      "react-native-button",
      "react-native-router-flux",
      "react-native-tabs",
      "exponent",
      "react-native-clone-referenced-element",
      "react-native-mock",
    ];

    for (var i = 0; i < modulesToCompileArray.length; i++) {
      if (filename.includes(modulesToCompileArray[i])) {
        return false;
      }
    }

    return true;
  }
}

require("babel-core/register")(config);

global.__DEV__ = true;

var chai = require('chai');
var chaiEnzyme = require('chai-enzyme');

global.expect = chai.expect;
chai.use(chaiEnzyme())

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
