function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let salesTax = 0.095
    let tip = 0.15
    let totalTax = salesTax + tip

    return totalTax * preTaxAndTipAmount + preTaxAndTipAmount
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9