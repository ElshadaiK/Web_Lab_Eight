// 1. Create a Person_ES6 Class 
class Person_ES6 {
    constructor(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName
    }

    greeting() {
        return (this.firstName + " " + this.lastName);
    }
}



//2. Create the constructor that initialize firstName and lastName


//3. Define greeting() method that displays Full Name


//4. Create  Object using ES6 class by passing firstName,lastName ["Bran Stark"]
const Bran = new Person_ES6("Bran", "Stark ")


//5. Display the greeting on Bran Object [remove the string when you have the object]
Obj_C3.innerHTML = Bran.greeting();