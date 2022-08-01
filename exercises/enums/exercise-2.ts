export {} // empty export to ensure the compiler treats this file as a module

// instead of having a enum value be a number
// we can make the enum value a string
enum Planet {
  Mercury = "Mercury",
  Venus = "Venus",
  Earth = "Earth",
  Mars = "Mars",
  Jupiter = "Jupiter",
  Saturn = "Saturn",
  Uranus = "Uranus",
  Neptune = "Neptune",
}

enum PlanetType {
  SmallRockPlanet = "small rock planet",
  GasGiant = "gas giant",
}

function getPlanetType(planet: Planet): PlanetType {
  switch (planet) {
    case Planet.Mercury:
    case Planet.Venus:
    case Planet.Earth:
    case Planet.Mars:
      return PlanetType.SmallRockPlanet
    case Planet.Jupiter:
    case Planet.Saturn:
    case Planet.Uranus:
    case Planet.Neptune:
      return PlanetType.GasGiant
  }
}

// function planetToString(planet: Planet): string {
//   switch (planet) {
//     case Planet.Mercury:
//       return "Mercury"
//     case Planet.Venus:
//       return "Venus"
//     case Planet.Earth:
//       return "Earth"
//     case Planet.Mars:
//       return "Mars"
//     case Planet.Jupiter:
//       return "Jupiter"
//     case Planet.Saturn:
//       return "Saturn"
//     case Planet.Uranus:
//       return "Uranus"
//     case Planet.Neptune:
//       return "Neptune"
//   }
// }

// function planetTypeToString(planetType: PlanetType): string {
//   switch (planetType) {
//     case PlanetType.SmallRockPlanet:
//       return "small rock planet"
//     case PlanetType.GasGiant:
//       return "gas giant"
//   }
// }

function describePlanet(planet: Planet): string {
  return `${planet} is a ${getPlanetType(planet)}`
}

console.log(describePlanet(Planet.Mars))
console.log(describePlanet(Planet.Saturn))
