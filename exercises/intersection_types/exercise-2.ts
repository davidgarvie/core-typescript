export {} // empty export to ensure the compiler treats this file as a module

type Book = {
  title: string
  author: string
  isbn: number  
}

type Album = {
  title: string
  artist: string
  isrc: string
}

type Review = {
  rating: number
  comments: string
}

type BookReview = Book & Review

type AlbumReview = Album & Review

type BookOrder = Book & { quantity: number }

// ------------------------------------------------------------------------- //
// Don't edit the code below here - this is for testing your types still     //
// work after refactoring.                                                   //
// ------------------------------------------------------------------------- //
const bookReview: BookReview = {
  title: "The Old Man and the Sea",
  author: "Ernest Herringway",
  isbn: 9787201046440,
  rating: 3.8,
  comments:
    "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.",
}

const albumReview: AlbumReview = {
  title: "Alas, I Cannot Swim",
  artist: "Laura Marlin",
  isrc: "UK-PAR-08-83647",
  rating: 4,
  comments:
    'To go by this debut, which was written well before she turned 18 last week, Laura Marling\'s "adolescence" was essentially a protracted period of soaking up Joni Mitchell and Bonnie "Prince" Billy. The unnervingly grown-up Alas I Cannot Swim is the result, and if it doesn\'t install her as the heir to the likes of Devendra Banhart, there\'s no hope for folk-pop.',
}

const bookOrder: BookOrder = {
  title: "The Old Man and the Sea",
  author: "Ernest Herringway",
  isbn: 9787201046440,
  quantity: 4,
}
