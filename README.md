Mathware
=======

A small compact library for algebra and vector manipulation for Node.js.
Tries to be small and have no dependencies.


Download
--------

Install via npm:

```bash
npm install mathware
```

then require it:

```
const mw = require('mathware');
```

Examples
-------

Create vector with new (defaults to empty)
```js
var v2 = new mw.vec2(); // Vec2 {x:0 , y:0 }
var v3 = new mw.vec3(); // Vec3 {x:0 , y:0, z:0}
var v4 = new mw.vec4(); // Vec3 {x:0 , y:0, z:0, w:1 }
```

You can pass the initial values
```js
var v3 = new mw.vec3(1.0, 2.0, 3.0); // Vec3 {x:1 , y:2, z:3 }
```

You can also create with a shorthand 
```js
var v3 = mw.v3(1.0, 2.0, 3.0); // Vec3 {x:1 , y:2, z:3 }
```

Document
--------

You can select the vector modules out for your need
```js
const vec2 = require('mathware').vec2;
var v = new vec2();
```

### In-place methods

If you want to alter a vector in place, you call the method on the object directly 
```js
var v1 = mw.v3(1,2,3);
var v2 = mw.v3(2,1,0);
v1.add(v2);  // v1 { x:3, y:3, z:3 }
```

If you want instead to make a new copy, using the static method
```js
var v1 = mw.v3(1,1,1);
var v2 = mw.v3(0,0,1);
var aNewVector = mw.vec3.add(v1, v2); 
// v1{ 1,1,1} , v2{ 0,0, 1}, aNewVector {1,1,2}
```

### Instance Methods ###

**constructor** 

**add(v)** 
Adds a vector 

**sub** 
Subtracts a vector

**scalarMultiply(a)**
Multiplies every component by the scalar a


**dot(v)**

Dot product of the two vectors
Remember that is equal to module(a) * module(b) * cos(alpha)

**cross(v)**

The cross product between the current vector and the param vector

**midpoint(v)**

Returs a new vector that is mid way between the current and v


**squaredLenght**

**length**

**distance(v)**

**squaredDistance(v)**

**normalize**
normalizes the vector in place

**zero**
sets the current vector components to zero

**set**
sets the components passed element by element

**toArray**

returns an array in the format [x,y,z]

**fromArray(ary)**
sets the values ary[a0,a1,a2] -> v{ x:a0, y:a1, z:a2}

**equal(v)**
Compares the two vectors and returns true if equal

### Static Methods ###

There is a static method version for every instance method that return a vector.