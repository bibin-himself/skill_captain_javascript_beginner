let books = [
  {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    year: "1883",
    status: "isAvailable",
  },
  {
    title: "Oliver Twist",
    author: "Charles Dickens",
    year: "1838",
    status: "isAvailable",
  },
  {
    title: "Aadujeevitham",
    author: "Benyamin",
    year: "2008",
    status: "isAvailable",
  },
];



books.forEach((book) => {
  console.log(
    `Name: ${book.title} Author: ${book.author} Year: ${book.year} Status: ${book.status}`
  );
});



let books2 = {
    title: "Aadujeevitham",
    author: "Benyamin",
    year: "2008",
    status: "isAvailable",
  }

  console.log("Name: " + books2['title'], "Author: " + books2['author'], "Author: " + books2['year'], "Status: " + books2['status'])

