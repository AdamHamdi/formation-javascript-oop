/**
 * Defining Object
 * [1] Object Literal
 * [2] With New KeyWord
 * [3] With Obect.create()
 *
 */

 let mainObj = {
    hasDiscount : true,
    showMsg : function(){
        //turnery if
        return `You ${ this.hasDiscount ? "": "don't"} have Discount `
    }
 }
 console.log(mainObj.hasDiscount);
 console.log(mainObj.showMsg());
// create a new obj

let otherObj = Object.create(mainObj)

otherObj.hasDiscount = false,
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());
// create a new obj

let lastObj = Object.create(mainObj)

lastObj.hasDiscount = true,
console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());

  
  