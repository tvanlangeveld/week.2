///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// let totPrice = 0;
// for(let i in cart)
//     totPrice + i;


// console.log(totPrice)


const summedPrice = cart.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue
    },0);

console.log(summedPrice)








//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE




function calcFinalPrice(cartTotal,tax,couponValue) {
    return cartTotal * tax - couponValue  
}

const totPriceAbove = calcFinalPrice(26.97, .06, .10)

console.log(totPriceAbove)







//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE 
const customerModel = {
    name: 'name' this will be a string, I chose this because We are just going to pass through a 
    address: 'address', We will be using a string even though we will be passing some numbers it is meant to just identify the customers address.
    item: ['item', 'item'], We will be using an array of strings here. Because we will be ordering multi items from the menu.
    totalCost: totalCost. We will be using a number
}



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE


const customer = {
    name: 'Tanner',
    address: '6611 e mayo blvd phx',
    items: ['burger', 'fries'],
    totalCost: 9.99
}