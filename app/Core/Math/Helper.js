function min(x,y)
{
    if(y < x) {return y;};
    return x;
}

function max(x,y)
{
    if(y > x) {return y;};
    return x;
}

function clamp(minVal,maxVal,x)
{

   return min(max(x, minVal), maxVal);
}

/* Polynomial interpolation */ 
function smoothstep(e0, e1, x)
{
    var t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
}

// Returns sign of a input
function sign(x)
{

    if(x == 0) {return x;}
    if(x < 0) { return -1;}
    return 1;
}

function abs(x)
{
    // x is zero
    if(sign(x) == 0) {return 0;};
    
    // x smaller than 0
    if(sign(x) == -1) {return 0 - x};
    
    // is bigger... 
    return x;
}

function floor(x)
{
    return x - Math.floor(x);
}

