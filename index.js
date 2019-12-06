'use strict'

const mw = {};

var vec2 = require('./lib/vec2');

function printMsg() {
  console.log("This is a message from the demo package");
}

function v2() { return new vec2(); }

mw.printMsg = printMsg;

mw.vec2 = vec2;
mw.v2 = v2; 

module.exports = mw; 


