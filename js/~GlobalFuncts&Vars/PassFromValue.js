function passFromValue(){
    var x = 250000;
    return x;  
}
function passToValue() {
    var y = passFromValue();
    console.log(y);//15
}
passToValue(); 