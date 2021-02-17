// A Person_ES6 Class 
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 1. Create a getFullName Method on prototype object 
// 2. The Function will return firstName lastName
Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

//create a customer object
function Customer(firstName, lastName, membership) {

    //3. Call the Person Object Constructor using call [Person.call(this,firsName,lastName)]
    Person.call(this, firstName, lastName);
    this.membership = membership;

}

// 4. Set the prototype of Customer to be Person Prototype 
Customer.prototype = Object.create(Person.prototype)
    // Note : Use Object.create


//5. Change the constructor of Customer to be Customer 
Customer.prototype.constructor = Customer;


// Create Customer Object pass ["Jorah", "Mormont", "PRO"]
let customer = new Customer("Jorah", "Mormont", "PRO")

//6. Display The Full Name [remove the string when you have the object]

fun_proto.innerHTML = customer.getFullName();