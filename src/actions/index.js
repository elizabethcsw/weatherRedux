const API_KEY = 'd33204696ff28be3ace87e617b5cad88'

export function selectBook(book){
  console.log("a book has been selected: ", book.title)
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
