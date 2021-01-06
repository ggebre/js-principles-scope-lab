// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = "bob";
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName
}
function setBestCustomer() {
    bestCustomer = 'not bob'; 
    return bestCustomer
}

function overwriteBestCustomer(str) {
    bestCustomer = str;
}

function changeLeastFavoriteCustomer(str) {
    leastFavoriteCustomer = 'somethingelse';
}
