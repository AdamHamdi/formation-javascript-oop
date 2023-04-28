/**
 * Defining Object
 * [1] Object Literal
 *
 */

let user = {
  //Properties
  firstName: "Adam",
  lastName: "HAMDI",
  age : 32,
  addresses: {
    tn: "Kairouan",
    usa: "New Jersey",
    Fr: "Paris",

    //methods
    getMainAddress: function () {
      return `Main Address In Tunisia In City ${user.addresses.tn}`;
    },
    //arrow function 1rst format
    getAddress:  () => {
      return `Main Address In Tunisia In City ${user.addresses.tn}`;
    },
    //arrow function 2nd format
    getLocalAddress:  () =>  `Main Address In Tunisia In City ${user.addresses.tn}`,
    
  },

  //Methods
  getFullName: function () {
    return ` Full name is ${user.firstName} ${user.lastName}`; // template literals
  },
  //get age in days
  getAgeInDays : ()=>` your age in days is ${user.age}`
};

// Accessing Objects Porperties
console.log(user.firstName); //dot Notation
console.log(user["firstName"]); //braket Notation
console.log(typeof user.firstName); //the type is string
console.log(user.addresses.tn); //dot Notation
console.log(user["addresses"]["usa"]); //braket Notation

// Accessing Objects Methods
console.log(user.getFullName()); //braket Notation
console.log(typeof user.getFullName); //the type is function
console.log(user.getAgeInDays()); //get age in days arrow function call
console.log(user.addresses.getMainAddress()); 
console.log(user.addresses.getAddress()); //arrow function call
