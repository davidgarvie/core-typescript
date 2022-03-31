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

// determine first film alphabetically
function getFirstFilmAlphabetically(films: Film[]) : Film {
  let firstFilmAlphabetically = films[0];
  for (let i = 0; i < films.length; i += 1) {
    if (films[i].title < firstFilmAlphabetically.title) {
      firstFilmAlphabetically = films[i]
    }
  }
  return firstFilmAlphabetically;
}

const firstFilmAlphabetically = getFirstFilmAlphabetically(films);


// task 2
const getFilmsByDirector = (films: Film[]): Film[] => films.filter(f => f.director === 'Tim Burton')
const filmsByTimBurton = getFilmsByDirector(films);


// task 3
const formatFilm = ({ title, rating, director }: Film) : string  => 
  `${title} (${rating}), directed by ${director}`


// log the information
console.log('First film alphabetically:', `${firstFilmAlphabetically.title} (${firstFilmAlphabetically.rating}), directed by ${firstFilmAlphabetically.director}`)

console.log('Films by Tim Burton:')
filmsByTimBurton.forEach((f) => console.log(formatFilm(f)))
