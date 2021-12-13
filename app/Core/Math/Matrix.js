// m4[row][column]
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


function MultiplyMatrices(m0, m1)
{

    var resMat = M4x4.create();

    // c0r0
    resMat.r0c0 = (m0.r0c0  *  m1.r0c0) +  (m0.r0c1  *  m1.r1c0) + (m0.r0c2  *  m1.r2c0) +  (m0.r0c3  *  m1.r3c0);
    resMat.r0c1 = (m0.r0c0  *  m1.r0c1) +  (m0.r0c1  *  m1.r1c1) + (m0.r0c2  *  m1.r2c1) +  (m0.r0c3  *  m1.r3c1);
    resMat.r0c2 = (m0.r0c0  *  m1.r0c2) +  (m0.r0c1  *  m1.r1c2) + (m0.r0c2  *  m1.r2c2) +  (m0.r0c3  *  m1.r3c2);
    resMat.r0c3 = (m0.r0c0  *  m1.r0c3) +  (m0.r0c1  *  m1.r1c3) + (m0.r0c2  *  m1.r2c3) +  (m0.r0c3  *  m1.r3c3);

}

var ma = M4x4.create();
var mb = M4x4.create();

mb.r0c0 = 16;
mb.r0c1 = 17;
mb.r0c2 = 17;
mb.r0c3 = 18;

mb.r1c0 = 20;
mb.r1c1 = 20;
mb.r1c2 = 21;
mb.r1c3 = 22;

mb.r2c0 = 23;
mb.r2c1 = 24;
mb.r2c2 = 25;
mb.r2c3 = 26;

mb.r3c0 = 27;
mb.r3c1 = 28;
mb.r3c2 = 29;
mb.r3c3 = 30;


ma.setToLinearValue();

ma.debugLog();
mb.debugLog();

MultiplyMatrices(ma,mb);
