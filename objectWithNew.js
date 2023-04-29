/**
 * Defining Object
 * [1] Object Literal
 * [2] With New KeyWord
 *
 */

let User = new Object()
    
User.firstName ="Adam";
User.lastName = "Hamdi";
User["age"] = 32;

User.getFullName = function(){
    return `Your Full Name Is ${User.firstName} ${User.lastName}`
}
console.log(User);
console.log(User.firstName);
console.log(User["lastName"]); 
console.log(User.age); 
console.log(User.getFullName());


  
  