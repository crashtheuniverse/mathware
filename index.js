'use strict'

const mw = {};

var vec2 = require('./lib/vec2');
var vec3 = require('./lib/vec3');
var vec4 = require('./lib/vec4');

mw.vec2 = vec2;
mw.vec3 = vec3; 
mw.vec4 = vec4;

mw.v2 = function(x = 0.0, y = 0.0) { return new vec2(x,y); }
mw.v3 = function(x = 0.0, y = 0.0, z = 0.0) { return new vec3(x,y,z); }
mw.v4 = function(x = 0.0, y = 0.0, z = 0.0, w = 1.0) { return new vec4(x,y,z,w); } 

module.exports = mw; 


