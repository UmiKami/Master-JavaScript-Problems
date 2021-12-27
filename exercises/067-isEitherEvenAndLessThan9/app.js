function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    let lessThan9 = num1 < 9 && num2 < 9
    return (num1 % 2 == 0 || num2 % 2 == 0) && lessThan9
}
