// 1.
let array = ["🍣", "🍷", "🍸", "🥃", "🧊", "🥤", "🍺", "🍗"];
console.log(array);

// 2.
array.unshift("🐤");
console.log(array);

// 3.
array.pop();
console.log(array);

// 4.
array.splice(5, 1);
console.log(array);

// 5.
array[1] = "🥂";
console.log(array);

// 6.
let newArray = array.slice(1, 4);
console.log(newArray);

// 7.
let xyzArray = ["x", "y", "z"];
let combinedArray = array.concat(xyzArray);
console.log(combinedArray);

// 8.
array.forEach(item => console.log(`@@@${item}`));
