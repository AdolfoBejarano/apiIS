async function accBalance()
{
var values =
[
["centercit","500000","9be9047d3222264adc927aa271cf7e88-913d0d0c-4341-4459-b44b-2efb130f83e5"]
];

for (var i = 0; i < values.length; i++) 
{
for(var j = 0; j < values[i].length; j++)
	
var xa = values [i] [(j-2)];
var xb = values [i] [(j-2)];
var xc = values [i] [(j-1)];

console.log(i+1,':',xa,',',xb,',',xc);

}
}
accBalance()