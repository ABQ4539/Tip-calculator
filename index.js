const bill = document.getElementById("billValue");
const people = document.getElementById("people");

const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twenty = document.getElementById("twenty");
const fifty = document.getElementById("fifty");
const custom = document.getElementById("custom");
const reset = document.getElementById("reset");

let tipAmountValue = document.getElementById("tip-amount-value");
let totalValue = document.getElementById("total-value");

let tipPercentage = 0;
let tipAmount = 0;
let tipAmountPerPerson = 0;
let totalAmount = 0;
let totalAmountPerPerson = 0;


five.addEventListener("click", function() {
    let billVal = bill.value;
    let noOfPeople = people.value;
    tipPercentage = 0.05
    tipAmount = tipPercentage * billVal
    tipAmountPerPerson = tipAmount / noOfPeople
    totalAmount = +tipAmount + +billVal
    totalAmountPerPerson = totalAmount/noOfPeople
    console.log(billVal);
    console.log(noOfPeople);
    console.log(tipAmount);
    console.log(tipAmountPerPerson);

    tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
    totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
})

ten.addEventListener("click", function() {
    let billVal = bill.value;
    let noOfPeople = people.value;
    tipPercentage = 0.10
    tipAmount = tipPercentage * billVal
    tipAmountPerPerson = tipAmount / noOfPeople
    totalAmount = +tipAmount + +billVal
    totalAmountPerPerson = totalAmount / noOfPeople
    console.log(billVal);
    console.log(noOfPeople);
    console.log(tipAmount);
    console.log(tipAmountPerPerson);
    console.log(totalAmount);
    console.log(totalAmountPerPerson);

    tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
    totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
})

fifteen.addEventListener("click", function() {
    let billVal = bill.value;
    let noOfPeople = people.value;
    tipPercentage = 0.15
    tipAmount = tipPercentage * billVal
    tipAmountPerPerson = tipAmount / noOfPeople
    totalAmount = +tipAmount + +billVal
    totalAmountPerPerson = totalAmount / noOfPeople
    console.log(billVal);
    console.log(noOfPeople);
    console.log(tipAmount);
    console.log(tipAmountPerPerson);
    console.log(totalAmount);
    console.log(totalAmountPerPerson);

    tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
    totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
})

twenty.addEventListener("click", function() {
    let billVal = bill.value;
    let noOfPeople = people.value;
    tipPercentage = 0.20
    tipAmount = tipPercentage * billVal
    tipAmountPerPerson = tipAmount / noOfPeople
    totalAmount = +tipAmount + +billVal
    totalAmountPerPerson = totalAmount / noOfPeople
    console.log(billVal);
    console.log(noOfPeople);
    console.log(tipAmount);
    console.log(tipAmountPerPerson);
    console.log(totalAmount);
    console.log(totalAmountPerPerson);

    tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
    totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
})

fifty.addEventListener("click", function() {
    let billVal = bill.value;
    let noOfPeople = people.value;
    tipPercentage = 0.50
    tipAmount = tipPercentage * billVal
    tipAmountPerPerson = tipAmount / noOfPeople
    totalAmount = +tipAmount + +billVal
    totalAmountPerPerson = totalAmount / noOfPeople
    console.log(billVal);
    console.log(noOfPeople);
    console.log(tipAmount);
    console.log(tipAmountPerPerson);
    console.log(totalAmount);
    console.log(totalAmountPerPerson);

    tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
    totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
})

custom.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let billVal = bill.value;
        let noOfPeople = people.value;
        tipPercentage = (custom.value) / 100;
        tipAmount = tipPercentage * billVal
        tipAmountPerPerson = tipAmount / noOfPeople
        totalAmount = +tipAmount + +billVal
        totalAmountPerPerson = totalAmount / noOfPeople
        console.log(billVal);
        console.log(noOfPeople);
        console.log(tipAmount);
        console.log(tipAmountPerPerson);
        console.log(totalAmount);
        console.log(totalAmountPerPerson);

        tipAmountValue.innerHTML = "$" + tipAmountPerPerson.toFixed(2)
        totalValue.innerHTML = "$" + totalAmountPerPerson.toFixed(2)
    }
})

reset.addEventListener("click", function() {
    bill.value = "";
    people.value = "";
    custom.value = "";
    tipAmountValue.innerHTML = "$0.00"
    totalValue.innerHTML = "$0.00"
})