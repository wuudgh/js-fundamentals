// do not edit this section
const book = {
  name: "Clean Code",
  author: "Robert C. Martin",
  category: "Cooking",
  isbn: {
    isbn10: "9780132350884",
    asin: "0132350882",
  },
  publisher: "Prentice Hall",
  dimensions: "10x12x2",
};

const isbn13 = "978-0132350884";

// TODO: write code in this section to pass the tests. You will need to add new code
// as well as modify some of the existing code
//To delete a key from an object i first have to pass delete through the book vairable then to the key you want to delete.
// e.g. delete.book.isbn, but in this case i have to go throgh another key to ge to the key i want to delete, e.g.delete book.isbn.asin
delete book.isbn.asin;

//To change the value of a key of an object.
// I fiirst have to throught the varaible then the key = any value i want to give it.
book.category = "Programming";

// In this case i will apply the above solution to it.
book.pages = 464;

//To delete a key from an object i first have to pass delete through the book vairable then to the key you want to delete.
// e.g. delete.book.dimensions.
delete book.dimensions;

//To add new key and value to the object, i will first do the varaible name of the object,
// then the key of what i want to and and it value e.g. book.isbn13 = "233444432234"
//I thought i was adding an isbn13 to the book object, whiles i should be adding it to the isbn object
// within the the book object.
book.isbn.isbn13 = "978-0132350884";

// Set this to the book name
//To set the name of the book i fisrt have to go through the variable which is  "book" then the key of the object
// which is "name" to do that i have to do book.name.
const name = book.name;

// Set this to the isbn 10 value
// To set a value to a key i will write i const with the key name = the value.
//Just like the code below.
const isbn10 = "9780132350884";

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
};

//npx jasmine spec/data-types/objects/object-keys.spec.js
