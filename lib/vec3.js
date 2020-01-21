/**
 * Vec3
 * @author CrashTheuniversE
 * 
 */

class Vec3 { 

    constructor(x = 0.0, y = 0.0, z = 0.0)  { 
        this.x = x; 
        this.y = y;
        this.z = z;
    }

    add(v) { 
        this.x += v.x; 
        this.y += v.y; 
        this.z += v.z; 
        return this;
    }

    sub(v) { 
        this.x -= v.x; 
        this.y -= v.y; 
        this.z -= v.z; 
        return this;
    }

    scalarMultiply(a) { 
        this.x *= a; 
        this.y *= a; 
        this.z *= a; 
        return this;
    }

    dot(v) { 
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
    }

    cross(v) { 
        return new Vec3( 
            this.y * v.z - this.z * v.y, 
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x 
        )
    }
    
    midPoint(v) { 
        return new Vec3(
            (this.x + v.x) * 0.5, 
            (this.y + v.y) * 0.5, 
            (this.z * v.z) * 0.5
        )
    }

    squaredLength() { 
    	return ( (this.x * this.x) + (this.y * this.y) + (this.z * this.z) );
    }

    length() { 
    	return Math.sqrt( this.squaredLength());
    }

    /** - no vector gets modified */
    distance(v) { 
        return Math.sqrt( this.squaredDistance(v));
    }

    /** - no vector gets modified */
    squaredDistance(v) { 
        return Vec3.sub(this, v).squaredLength();
    }

    normalize() { 
		let invLen = 1.0 / this.length();
		this.x *= invLen;
		this.y *= invLen; 
		this.z *= invLen;
        return this;
    }

    zero() { 
    	this.x = 0.0; this.y = 0.0; this.z = 0.0;
        return this;
    }

	set( x, y, z) { 
		this.x = x;
		this.y = (y === undefined) ? x : y;
        this.z = (z === undefined) ? x : z;
        return this;
	}

    toArray() { 
        return [this.x, this.y, this.z];
    }

    fromArray(a) { 
        this.x = a[0]; this.y = a[1]; this.z = a[2];
        return this;
    }

	equal(v) {
		if( Math.abs(this.x - v.x) > Number.EPSILON ) return false; 
		if( Math.abs(this.y - v.y) > Number.EPSILON ) return false;
		if( Math.abs(this.z - v.z) > Number.EPSILON ) return false;
		return true;
    }

    floor() { 
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
    }

    static v(x = 0.0, y = 0.0, z = 0.0) { 
        return new this(x, y, z);
    }
    static add(v1, v2) { 
        return new this(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    static sub(v1, v2) { 
        return new this(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    static zero() { 
        return new this(0.0, 0.0, 0.0);
    }
    static fromArray(a) { 
        return new this(a[0], a[1], a[2])
    }
    static normalized(v) { 
        let invLen = 1.0 / v.length();
        return new this(v.x * invLen, v.y * invLen, v.z * invLen);
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
     * @param {Vec3} v 
     * @param {Number} a 
     */
    static scalarMultiply(v, a) { 
        return new this(v.x * a, v.y * a, v.z * a);
    }
    static distance(v1, v2) { 
        return v1.distance(v2);
    }

    static squaredDistance(v1, v2) { 
        return v1.squaredDistance(v2);
    }

    static centroid(vectors) {
        if(vectors == undefined || vectors.length == 0) return new this;
        let c = vectors.reduce( (sum, v) => { 
            return this.add(sum, v);
        }, new this);
        return c.scalarMultiply(1.0 / vectors.length);
    }
}

module.exports = Vec3;

