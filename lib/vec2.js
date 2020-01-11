////////////////////////////////////////////////////////////////
//
// vec2 
// 
class Vec2 { 

    constructor(x = 0.0, y = 0.0)  { 
        this.x = x; 
        this.y = y;
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

    /** - no vector gets modified */
    distance(v) {
        return Math.sqrt(this.squaredDistance(v));
    }

    /** - no vector gets modified */
    squaredDistance(v) {
        return Vec2.sub(this, v).squaredLength();
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

	set( x, y ) { 
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

    floor() { 
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }

    //Static
    static v(x = 0.0, y = 0.0) { 
        return new this(x, y);
    }
    static add(v1, v2) { 
        return new this(v1.x + v2.x, v1.y + v2.y);
    }
    static sub(v1, v2) { 
        return new this(v1.x - v2.x, v1.y - v2.y);
    }
    static zero() { 
        return new this(0.0, 0.0);
    }
    static fromArray(a) { 
        return new this(a[0], a[1])
    }
    static normalized(v) { 
        let invLen = 1.0 / v.length();
        return new this(v.x * invLen, v.y * invLen);
    }
    static equal(v1, v2) { 
        return v1.equal(v2);
    }
    static midPoint(v1, v2) { 
        return v1.midPoint(v2);
    }
    static cross(v1, v2) { 
        return v1.cross(v2);
    }
    static dot(v1, v2) { 
        return v1.dot(v2);
    }
    /**
     * 
     * @param {Vec2} v 
     * @param {Number} a 
     */
    static scalarMultiply(v, a) { 
        return new this(v.x * a, v.y * a);
    }
    static distance(v1, v2) { 
        return v1.distance(v2);
    }

    static squaredDistance(v1, v2) { 
        return v1.squaredDistance(v2);
    }

}

module.exports = Vec2;


