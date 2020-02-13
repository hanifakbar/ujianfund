const Faktorial = (Num) => {
    let sum = 1;
    for (let i = Num; i >= 1; i--) {
        sum *= i
    }
    return sum
}
console.log(Faktorial(5))
console.log(Faktorial(4))
console.log(Faktorial(10))