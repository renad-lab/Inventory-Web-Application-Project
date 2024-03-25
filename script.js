document.addEventListener("DOMContentLoaded", function () {
  const itemForm = document.getElementById("itemform");
  const bookListContainer = document.getElementById("book-container");

  itemForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const itemName = document.getElementById("item_name").value;
    const itemAuthor = document.getElementById("item_author").value;
    const itemImage = document.getElementById("item_image").value;
    const itemReleaseDate = document.getElementById("item_releasedate").value;
    const itemLanguage = document.getElementById("item_language").value;
    const itemQuantity = document.getElementById("item_quantity").value;

    const newBook = {
      name: itemName,
      author: itemAuthor,
      image: itemImage,
      releaseDate: itemReleaseDate,
      language: itemLanguage,
      quantity: itemQuantity,
    };

    addBookToList(newBook);
    itemForm.reset();
  });

  function addBookToList(book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book-container");
    bookDiv.innerHTML = `
      <img src="${book.image}" alt="${book.name}">
      <h3>${book.name}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Release Date:</strong> ${book.releaseDate}</p>
      <p><strong>Language:</strong> ${book.language}</p>
      <p><strong>Quantity:</strong> ${book.quantity}</p>
      <hr>
    `;
    bookListContainer.appendChild(bookDiv);
  }
});
