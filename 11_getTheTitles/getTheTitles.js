const getTheTitles = function(obj) {
  const books = []
  for (let book of obj) {
    books.push(book.title)
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
