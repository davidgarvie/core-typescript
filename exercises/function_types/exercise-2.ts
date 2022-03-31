export {} // empty export to ensure the compiler treats this file as a module

type Film = {
  title: string
  director: string
  rating: "U" | "PG" | 12 | 15 | 18
}

const films: Film[] = [
  { title: "Finding Nemo", director: "Andrew Sturgeon", rating: "U" },
  { title: "Barracuda", director: "Harry Kerwin", rating: 15 },
  { title: "Big Fish", director: "Tim Burton", rating: "PG" },
  { title: "A Fish Called Wanda", director: "Charles Crichton", rating: 18 },
]

function formatFilm (film: Film, index? : number): string {
  const text = `${film.title} (${film.rating}), directed by ${film.director}`;
  // specifically check if index is undefined because 0 is falsey
  // you got taught this last week and didn't remember you dodo
  return index === undefined ? text: `${index}. ${text}`;
}

function logFilms(showIndex: boolean, ...films: Film[]): void {
  // this implementation assumes we are printing the index of the film in the list that is passed to the function
  // it does not print the index of the film in the original films array defined at the top level
  if (showIndex) {
    films.forEach((f, i) => console.log(formatFilm(f, i)))
  } else {
    films.forEach((f) => console.log(formatFilm(f)))
  }
}

console.log("Expect index to be logged");
logFilms(true, films[0], films[2], films[3])
console.log("Do not Expect index to be logged");
logFilms(false, films[1])
