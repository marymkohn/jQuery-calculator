const Calculate = {
    factorial(inputNumber) {
        if(inputNumber === 0) {
            return 1;
        } else {
            for (let i = inputNumber - 1; i >= 1; i--) {
                inputNumber *= i;
            }
            return inputNumber
        }

    }
};

console.log(Calculate.factorial(5)); // Output: 120
module.exports = Calculate;
