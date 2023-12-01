var keys = ["Key1", "Key2", "Key3"];
var values = [1, 2, 3];

// create object
var obj = {};

// Loop to insert key & value in this object one by one
for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];


} 
console.log(keys[0],':',values[0]);
console.log(keys[1],':',values[1]);
console.log(keys[2],':',values[2]);

// output can be displayed as : one => 1  two => 2 three => 3