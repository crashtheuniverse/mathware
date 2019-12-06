'use strict'

const mw = {};

var vec2 = require('./lib/vec2');
var vec3 = require('./lib/vec3');
var vec4 = require('./lib/vec4');

function printMsg() {
  console.log("This is a message from the demo package");
}

mw.printMsg = printMsg;

mw.vec2 = vec2;
mw.vec3 = vec3; 
mw.vec4 = vec4;

mw.v2 = function() { return new vec2(); }
mw.v3 = function() { return new vec3(); }
mw.v4 = function() { return new vec4(); } 

module.exports = mw; 


