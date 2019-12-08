////////////////////////////////////////////////////////////////
//
// vec2 
// 
class Vec2 { 

    constructor(x = 0.0, y = 0.0)  { 
        this.x = 0; 
        this.y = 0;
    }

    add(v) { 
        this.x += v.x; 
        this.y += v.y;
        return this;
    }

    sub(v) { 
        this.x -= v.x; 
        this.y -= v.y; 
        return this;
    }

    scalarMultiply(a) { 
        this.x *= a; 
        this.y *= a; 
        return this;
    }

    dot(v) { 
        return (this.x * v.x) + (this.y * v.y);
    }

    cross(v) { 
         return (this.x * v.y) - (this.y * v.x);   
    }

    midPoint(v) { 
        return new Vec2(
            (this.x + v.x) * 0.5, 
            (this.y + v.y) * 0.5 
        )
    }

    squaredLength() { 
    	return ( (this.x * this.x) + (this.y * this.y) );
    }

    length() { 
    	return Math.sqrt( this.squaredLength());
    }

    normalize() { 
		let invLen = 1.0 / this.length();
		this.x *= invLen;
		this.y *= invLen; 
        return this;
    }

    zero() { 
    	this.x = 0.0; this.y = 0.0;
        return this;
    }

	set( x, y, z) { 
		this.x = x;
		this.y = (y === undefined) ? x : y;
        return this;
	}

    toArray() { 
        return [this.x, this.y];
    }

    fromArray(a) { 
        this.x = a[0]; this.y = a[1];
        return this;
    }

	equal(v) {
		if( Math.abs(this.x - v.x) > Number.EPSILON ) return false; 
		if( Math.abs(this.y - v.y) > Number.EPSILON ) return false;
		return true;
    }
}

module.exports = Vec2;


