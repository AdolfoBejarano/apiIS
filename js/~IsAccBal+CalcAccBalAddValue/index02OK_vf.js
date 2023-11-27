async function accBalance() 
{
var cubes =
[
["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17"],
["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10","b11","b12","b13","b14","b15","b16","b17"],
["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16","c17"],
["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14","d15","d16","d17"],
["e1","e2","e3","e4","e5","e6","e7","e8","e9","e10","e11","e12","e13","e14","e15","e16","e17"],
["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13","f14","f15","f16","f17"],
["g1","g2","g3","g4","g5","g6","g7","g8","g9","g10","g11","g12","g13","g14","g15","g16","g17"],
];

for(var i = 0; i < cubes.length; i++)
{
for(var j = 0; j < cubes[i].length; j++)

var xa = cubes [i] [(j-16)];
var xb = cubes [i] [(j-16)];
var xc = cubes [i] [(j-15)];
var xd = cubes [i] [(j-14)];
var xe = cubes [i] [(j-13)];
var xf = cubes [i] [(j-12)];
var xg = cubes [i] [(j-11)];
var xh = cubes [i] [(j-10)];
var xi = cubes [i] [(j-9)];
var xj = cubes [i] [(j-8)];
var xk = cubes [i] [(j-7)];
var xl = cubes [i] [(j-6)];
var xm = cubes [i] [(j-5)];
var xn = cubes [i] [(j-4)];
var xo = cubes [i] [(j-3)];
var xp = cubes [i] [(j-2)];
var xq = cubes [i] [(j-1)];

console.log(i+1,xa,xb,xc,xd,xe,xf,xg,xh,xi,xj,xk,xl,xm,xn,xo,xp,xq);

{
}
}
}
accBalance()