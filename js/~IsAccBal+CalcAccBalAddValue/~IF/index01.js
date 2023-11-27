async function accBalance() 
{
let evens = 
[
["a1","a2","a3","a4"],
["b1","b2","b3","b4"],
//["c1","c2","c3","c4"],
//["d1","d2","d3","d4"],
//["e1","e2","e3","e4"]

];

//For Loop
for(let i = 0; i < evens.length; i++)
{
for(let j = 0; j < evens[i].length; j++)
{

//console.log('evens[i].length:',evens.length);
//console.log('evens[i].length:',evens[i].length);

//let X=i;
//let YA=j+1;
//console.log('YA:',YA);
//console.log('j++:',j++);
//let YB=j+2;
//let YC=j+3;

//console.log('X:', X);
//console.log('Y:', Y);

//let AccName     = evens [X] [Y];
//let ApiKey      = evens [X] [Y];
//let AccRecCred  = evens X Z;

let AccName     = evens [i] [j];
let ApiKey      = evens [i] [j];

//let AccName     = evens X YA;
//let ApiKey      = evens X YB;
//let AccRecCred  = evens [i] [j+++];

//console.log('AccName   :',i+1,j-1,X,Y,AccName);
//console.log('ApiKey    :',i+1,j,X,Y+1,ApiKey);

console.log('AccName   :',i,j-1,AccName);
console.log('ApiKey    :',i,j,ApiKey);

//console.log('AccName   :',X,YA,AccName);
//console.log('ApiKey    :',X,YB,ApiKey);

//console.log('AccRecCred:',i+1,j,ApiKey);

//console.log('i      :', i);
//console.log('j      :', j);



}
}
}
accBalance()