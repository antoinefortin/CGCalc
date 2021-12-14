
function M4x4() 
{

    this.r0c0 = 0;
    this.r0c1 = 0;
    this.r0c2 = 0;
    this.r0c3 = 0;
    
    this.r1c0 = 0;
    this.r1c1 = 0;
    this.r1c2 = 0;
    this.r1c3 = 0;

    this.r2c0 = 0;
    this.r2c1 = 0;
    this.r2c2 = 0;
    this.r2c3 = 0;

    this.r3c0 = 0;
    this.r3c1 = 0;
    this.r3c2 = 0;
    this.r3c3 = 0;
}



M4x4.create = function() {
    return new M4x4();
};


M4x4.prototype.assignFromArray = function(arr)
{
    this.r0c0 = arr[0][0];
    this.r0c1 = arr[0][1];
    this.r0c2 = arr[0][2];
    this.r0c3 = arr[0][3];;
    
    this.r1c0 = arr[1][0];
    this.r1c1 = arr[1][1];
    this.r1c2 = arr[1][2];
    this.r1c3 = arr[1][3];

    this.r2c0 = arr[2][0];
    this.r2c1 = arr[2][1];
    this.r2c2 = arr[2][2];
    this.r2c3 = arr[2][3];

    this.r3c0 = arr[3][0];
    this.r3c1 = arr[3][1];
    this.r3c2 = arr[3][2];
    this.r3c3 = arr[3][3];


}

M4x4.prototype.setToLinearValue = function()
{
    this.r0c0 = 0;
    this.r0c1 = 1;
    this.r0c2 = 2;
    this.r0c3 = 3;
    
    this.r1c0 = 4;
    this.r1c1 = 5;
    this.r1c2 = 6;
    this.r1c3 = 7;

    this.r2c0 = 8;
    this.r2c1 = 9;
    this.r2c2 = 10;
    this.r2c3 = 11;

    this.r3c0 = 12;
    this.r3c1 = 13;
    this.r3c2 = 14;
    this.r3c3 = 15;
}


M4x4.prototype.set_r0c0 = function(x)
{
    this.r0c0 = x;
}

M4x4.prototype.set_r0c1 = function(x)
{
    this.r0c1 = x;
}

M4x4.prototype.set_r0c2 = function(x)
{
    this.r0c2 = x;
}

M4x4.prototype.set_r0c3 = function(x)
{
    this.r0c3 = x;
}

// Row 1 C x
M4x4.prototype.set_r1c0 = function(x)
{
    this.r1c0 = x;
}

M4x4.prototype.set_r1c1 = function(x)
{
    this.r1c1 = x;
}

M4x4.prototype.set_r1c2 = function(x)
{
    this.r1c2 = x;
}

M4x4.prototype.set_r1c3 = function(x)
{
    this.r1c3 = x;
}


M4x4.prototype.set_r2c0 = function(x)
{
    this.r2c0 = x;
}

M4x4.prototype.set_r2c1 = function(x)
{
    this.r2c1 = x;
}

M4x4.prototype.set_r2c2 = function(x)
{
    this.r2c2 = x;
}

M4x4.prototype.set_r2c3 = function(x)
{
    this.r2c3 = x;
}


M4x4.prototype.set_r3c0 = function(x)
{
    this.r3c0 = x;
}


M4x4.prototype.set_r3c1 = function(x)
{
    this.r3c1 = x;
}

M4x4.prototype.set_r3c2 = function(x)
{
    this.r3c2 = x;
}

M4x4.prototype.set_r3c3 = function(x)
{
    this.r3c3 = x;
}

M4x4.prototype.debugLog = function()
{
    console.log(this.r0c0 + " " + this.r0c1 + " " + this.r0c2+ " " + this.r0c3);
    console.log(this.r1c0 + " " + this.r1c1 + " " + this.r1c2+ " " + this.r1c3);
    console.log(this.r2c0 + " " + this.r2c1 + " " + this.r2c2+ " " + this.r2c3);
    console.log(this.r3c0 + " " + this.r3c1 + " " + this.r3c2+ " " + this.r3c3);
}


M4x4.prototype.MultiplyByVector4 = function(vec4)
{
    this.r0c0 = vec4.x * this.r0c0;
    this.r0c1 = vec4.y * this.r0c1;
    this.r0c2 = vec4.z * this.r0c2;
    this.r0c3 = vec4.w * this.r0c3; 

    this.r1c0 = vec4.x * this.r1c0;
    this.r1c1 = vec4.y * this.r1c1;
    this.r1c2 = vec4.z * this.r1c2;
    this.r1c3 = vec4.w * this.r1c3; 

    this.r2c0 = vec4.x * this.r2c0;
    this.r2c1 = vec4.y * this.r2c1;
    this.r2c2 = vec4.z * this.r2c2;
    this.r2c3 = vec4.w * this.r2c3; 

    this.r3c0 = vec4.x * this.r3c0;
    this.r3c1 = vec4.y * this.r3c1;
    this.r3c2 = vec4.z * this.r3c2;
    this.r3c3 = vec4.w * this.r3c3; 

}

function MultiplyMatrices(m0, m1)
{

    var resMat = M4x4.create();
    resMat.r0c0 = (m0.r0c0  *  m1.r0c0) +  (m0.r0c1  *  m1.r1c0) + (m0.r0c2  *  m1.r2c0) +  (m0.r0c3  *  m1.r3c0);
    resMat.r0c1 = (m0.r0c0  *  m1.r0c1) +  (m0.r0c1  *  m1.r1c1) + (m0.r0c2  *  m1.r2c1) +  (m0.r0c3  *  m1.r3c1);
    resMat.r0c2 = (m0.r0c0  *  m1.r0c2) +  (m0.r0c1  *  m1.r1c2) + (m0.r0c2  *  m1.r2c2) +  (m0.r0c3  *  m1.r3c2);
    resMat.r0c3 = (m0.r0c0  *  m1.r0c3) +  (m0.r0c1  *  m1.r1c3) + (m0.r0c2  *  m1.r2c3) +  (m0.r0c3  *  m1.r3c3);    
    resMat.r1c0 = (m0.r1c0 * m1.r0c0) + (m0.r1c1 * m1.r1c0) + (m0.r1c2 * m1.r2c0) + (m0.r1c3 * m1.r3c0);
    resMat.r1c1 = (m0.r1c0 * m1.r0c1) + (m0.r1c1 * m1.r1c1) + (m0.r1c2 * m1.r2c1) + (m0.r1c3 * m1.r3c1);
    resMat.r1c2 = (m0.r1c0 * m1.r0c2) + (m0.r1c1 * m1.r1c2) + (m0.r1c2 * m1.r2c2) + (m0.r1c3 * m1.r3c2);
    resMat.r1c3 = (m0.r1c0 * m1.r0c3) + (m0.r1c1 * m1.r1c3) + (m0.r1c2 * m1.r2c3) + (m0.r1c3 * m1.r3c3);
    resMat.r2c0 = (m0.r2c0 * m1.r0c0) + (m0.r2c1 * m1.r1c0) + (m0.r2c2 * m1.r2c0) + (m0.r2c3 * m1.r3c0);
    resMat.r2c1 = (m0.r2c0 * m1.r0c1) + (m0.r2c1 * m1.r1c1) + (m0.r2c2 * m1.r2c1) + (m0.r2c3 * m1.r3c1);
    resMat.r2c2 = (m0.r2c0 * m1.r0c2) + (m0.r2c1 * m1.r1c2) + (m0.r2c2 * m1.r2c2) + (m0.r2c3 * m1.r3c2);
    resMat.r2c3 = (m0.r2c0 * m1.r0c3) + (m0.r2c1 * m1.r1c3) + (m0.r2c2 * m1.r2c3) + (m0.r2c3 * m1.r3c3);
    resMat.r3c0 = (m0.r3c0 * m1.r0c0) + (m0.r3c1 * m1.r1c0) + (m0.r3c2 * m1.r2c0) + (m0.r3c3 * m1.r3c0);
    resMat.r3c1 = (m0.r3c0 * m1.r0c1) + (m0.r3c1 * m1.r1c1) + (m0.r3c2 * m1.r2c1) + (m0.r3c3 * m1.r3c1);
    resMat.r3c2 = (m0.r3c0 * m1.r0c2) + (m0.r3c1 * m1.r1c2) + (m0.r3c2 * m1.r2c2) + (m0.r3c3 * m1.r3c2);
    resMat.r3c3 = (m0.r3c0 * m1.r0c3) + (m0.r3c1 * m1.r1c3) + (m0.r3c2 * m1.r2c3) + (m0.r3c3 * m1.r3c3);

    return resMat;

}

var ma = M4x4.create();
var mb = M4x4.create();

mb.r0c0 = 16;
mb.r0c1 = 17;
mb.r0c2 = 18;
mb.r0c3 = 19;

mb.r1c0 = 20;
mb.r1c1 = 21;
mb.r1c2 = 22;
mb.r1c3 = 23;

mb.r2c0 = 24;
mb.r2c1 = 25;
mb.r2c2 = 26;
mb.r2c3 = 27;

mb.r3c0 = 28;
mb.r3c1 = 29;
mb.r3c2 = 30;
mb.r3c3 = 31;


ma.setToLinearValue();


var resMat = MultiplyMatrices(ma,mb);
ma = resMat;

var vector4 = {x: 1, y: 2, z: 3, w: 0};
//resMat.MultiplyByVector4(vector4);



var arr = [
            [1,2,3,4],
            [3,4,5,6],
            [7,8,9,10],
            [11,12,13,14] 
          ];

var mat = M4x4.create();
mat.assignFromArray(arr);
 