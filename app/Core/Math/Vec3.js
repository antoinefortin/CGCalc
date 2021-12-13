function Vec3(x, y, z) {
    this.x = x != null ? x : 0;
    this.y = y != null ? y : 0;
    this.z = z != null ? z : 0;
    this.w = 0;
  }
  
  Vec3.create = function(x, y, z) {
    return new Vec3(x, y, z);
  };
  
  Vec3.prototype.setW1 = function()
  {
      this.w = 1;
  }
  
  Vec3.prototype.set = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };
  
  Vec3.prototype.addVector = function(v)
  {
      
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      
  }
  
  Vec3.prototype.substractVector = function(v)
  {
      
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
  }
  
  Vec3.prototype.multiply = function(f)
  {
      
      this.x *= f;
      this.y *= f;
      this.z *= f;
  }
  
  Vec3.prototype.divide = function(f)
  {
      
      this.x /= f;
      this.y /= f;
      this.z /= f;
      
  }
  
  Vec3.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };
  
  Vec3.prototype.normalize = function()
  {
      var l = this.length();
      
      this.x /= l;
      this.y /= l;
      this.z /= l;
  }
  
  Vec3.prototype.dot = function(b) {
    return this.x * b.x + this.y * b.y + this.z * b.z;
  };
  
  Vec3.prototype.cross = function(v) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var vx = v.x;
    var vy = v.y;
    var vz = v.z;
    this.x = y * vz - z * vy;
    this.y = z * vx - x * vz;
    this.z = x * vy - y * vx;
    return this;
  };
  
  // Change the vector
  Vec3.prototype.cross = function(v) {
    var x = this.x;
    var y = this.y;
    var z = this.z;
    var vx = v.x;
    var vy = v.y;
    var vz = v.z;
    this.x = y * vz - z * vy;
    this.y = z * vx - x * vz;
    this.z = x * vy - y * vx;
    return this;
  };
  
  
  function crossVectors(a, b)
  {
      
      console.log(a);
      console.log(b);
      
      var cx =   a.y * b.z - a.z * b.y;
      var cy =   a.z * b.x - a.x * b.z;
      var cz =   a.x * b.y - a.y * b.x;
      
      return Vec3.create(cx, cy, cz);
      
  }
  

  
  
  