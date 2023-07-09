
//!Find Even Values from array, Make Double of every element and Find Array length manually 


let data = [10, 19, 6, 18, 45, 68, 90, 35, 100];
let evenArray = [];
let count = 0;

for (let i = 0; i < data.length; i++) {
    //console.log(data[i] / 2);
    if (data[i] % 2 == 0) {
        count++;
        evenArray.push(data[i] * 2)
    }
}

console.warn(count)
console.warn(evenArray)