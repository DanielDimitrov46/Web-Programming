let number = Number(input[0])
let name = input[1];
var number2 = Number(input[2])

for (let i = 0; i < number; i++) {
    console.log(i)
}

function showAge(name, number) {
    console.log(name + ':' + number)

}
showAge(name, number)