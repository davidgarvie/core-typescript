export {} // empty export to ensure the compiler treats this file as a module

// type Planet =
//   | "Mercury"
//   | "Venus"
//   | "Earth"
//   | "Mars"
//   | "Jupiter"
//   | "Saturn"
//   | "Uranus"
//   | "Neptune"

// enum is a nicer way to represent the union

enum Planet {
  Mercury, // corresponds to value 0
  Venus, // 1. etc
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune
}

// type PlanetType = "SmallRockPlanet" | "GasGiant"

enum PlanetType {
  SmallRockPlanet,
  GasGiant
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

function describePlanet(planet: Planet): string {
  return `${planet} is a ${getPlanetType(planet)}`
}

console.log(describePlanet(Planet.Mars))
console.log(describePlanet(Planet.Saturn))
