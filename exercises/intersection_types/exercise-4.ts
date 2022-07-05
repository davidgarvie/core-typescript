export {} // empty export to ensure the compiler treats this file as a module

type Review = {
  rating: number
  comments: string
}

type BookReview = Review & {
  title: string
  author: string
  isbn: number
}

type FilmReview = Review & { 
  title: string
  director: string
  releaseYear: number;
}

type AlbumReview = Review & {
  title: string
  artist: string
}



// type Review = BookReview | AlbumReview | FilmReview

function getHighestRating(reviews: Review[]): number {
  let highestRating = 0
  for (const review of reviews) {
    if (review.rating > highestRating) {
      highestRating = review.rating
    }
  }
  return highestRating
}

function reviewToHTML(review: Review): string {
  return `
    <h2>${review.title}</h2>
    <p>Rating: ${review.rating}</p>
    <p>${review.comments}</p>
  `
}
