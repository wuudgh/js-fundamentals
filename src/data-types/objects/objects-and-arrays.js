// do not modify this code
const basket = {
  items: [
    {
      name: "Apple",
      quantity: 10,
      price: 1,
    },
    {
      name: "Lemon",
      quantity: 2,
      price: 0.5,
    },
  ],
  voucherCodes: ["AA-AA-A", "BB-BB-B"],
};

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code

// Set this variable to the length of the baskets voucher codes array
// To set this to the length of voucher code i have to do voucherCode.length.
// But looking at this type of data, I pass through the variable name basket before i can get to voucherCodes.
// So it will be something like this basket.voucherCode.length.
// And also because voucherCode is a property of an object.
const numberOfVoucherCodes = basket.voucherCodes.length;

// Set this variable to the first element in of the baskets voucher codes array
// To find the first element of an object inside and array i first have to go through the object.
//Then i can get to the array.
//To find and element i have to find the index of that element. e.g. basket.voucherCodes[0]
const firstVoucherCode = basket.voucherCodes[0];

//To set the price of an item in the basket i fisrt looked at the data structure.
// It is an objest that has an array of objets, so i  have to go through the object with its variable name,
// then the array and index of where i want to change, then the key with = and the value that i want to update.
basket.items[0].price = 2;

//To add new data to  items i have to make sure it is in the same form as the data that alredy exist.
//The data have to be in an object form, e.g.{data}
//I  have to make sure i pass through the main variable which is  basket, so it will be basket.items.
// Since i want it to be at the end of items list i have to use the push method.e.g. basket.items.push({data}).
basket.items.push({ name: "Oranges", price: 0.75, quantity: 4 });
// Do not edit this exported object
module.exports = {
  basket: basket,
  numberOfVoucherCodes: numberOfVoucherCodes,
  firstVoucherCode: firstVoucherCode,
};
