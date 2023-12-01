var arr = { "one": 1, "two": 2, "three": 3 }; 

//to get values
for (let value of Object.values(arr)) {
    alert(value);
}
//Output: 1, 2, 3

//to get keys
for (let key of Object.keys(arr)) {
    alert(key);
}
//Output: one, two, three