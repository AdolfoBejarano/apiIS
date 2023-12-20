if (typeof window !== "undefined")
{
function m()
{
window.value=100;//declaring global variable by window object
console.log(window.value);//accessing global variable
}  

function n()
{  
console.log(window.value);//accessing global variable from other function  
}
m();
n();
}