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
            (this.z * v.z) & 0.5
        )
    }

    squaredLength() { 
    	return ( (this.x * this.x) + (this.y * this.y) + (this.z * this.z) );
    }

    length() { 
    	return Math.sqrt( this.squaredLength());
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
    

}

module.exports = Vec3;

