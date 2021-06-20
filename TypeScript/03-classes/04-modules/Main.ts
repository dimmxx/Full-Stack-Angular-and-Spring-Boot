import {Customer} from './Customer'

let myCustomer = new Customer("John", "Peterson");

myCustomer.firstName = "Susan";
myCustomer.lastName = "Martin";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);