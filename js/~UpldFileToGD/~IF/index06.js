function m()
{  
window.value=100;//declaring global variable by window object  
}  

function n()
{  
console.log(window.value);//accessing global variable from other function  
}
m();
n();