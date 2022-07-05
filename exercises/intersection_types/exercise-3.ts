export {} // empty export to ensure the compiler treats this file as a module

// ------------------------------------------------------------------------- //
// Don't modify these types                                                  //
// ------------------------------------------------------------------------- //
type Book = {
  title: string
  author: string
  genre: "Fantasy" | "Romance" | "Dystopian" | "Contemporary"
}

type Film = {
  title: string
  director: string
  genre: "Action" | "Comedy" | "Fantasy" | "Romance"
  rating: "U" | "PG" | 12 | 16 | 18
}

type Review = {
  rating: 1 | 2 | 3 | 4 | 5
  comments: string
}

type BookSeries = {
  title: string
  entries: Book[]
}

type FilmSeries = {
  title: string
  entries: Film[]
}

// ------------------------------------------------------------------------- //
// You can use these values in your answers (if you want)                    //
// ------------------------------------------------------------------------- //
const seriesTitle = "Herring Potter"

const book: Book = {
  title: "Herring Potter and the Philosopher's Stone",
  author: "J K Rowling",
  genre: "Fantasy",
}

const film: Film = {
  title: "Herring Potter and the Philosopher's Stone",
  director: "Chris Columbus",
  genre: "Fantasy",
  rating: "PG",
}

const review: Review = {
  rating: 5,
  comments: "Best movie ever"
}

// ------------------------------------------------------------------------- //
// Uncomment and complete the code below...                                  //
// ------------------------------------------------------------------------- //

const bookReview: Book & Review = {
  title: "Herring Potter and the Philosopher's Stone",
  author: "J K Rowling",
  genre: "Fantasy",
  rating: 5,
  comments: "Best movie ever"
}


// struggle with the intersection here
// Rating can either be the rating for the Film (e.g, PG) or the rating from the review, e.g. (1 | 2 | 3 | 4 | 5)
const filmReview: Film & Review = {
  title: "Herring Potter and the Philosopher's Stone",
  director: "Chris Columbus",
  genre: "Fantasy",
  rating: "PG",
  comments: "Best movie ever"
}

// const adaptation: Book & Film = {
//   title: "Herring Potter and the Philosopher's Stone",
//   author: "J K Rowling",
//   genre: "Fantasy",
//   director: "Chris Columbus",
//   rating: "PG",
// }

const adaptation: Book & Film = { ...book, ...film }

const bookAndFilmSeries: BookSeries & FilmSeries = {
  title: "Herring Potter and the Philosopher's Stone",
  entries: [{
    title: "Herring Potter and the Philosopher's Stone",
    author: "J K Rowling",
    genre: "Fantasy",
    director: "Chris Columbus",
    rating: "PG",
  }]
}
