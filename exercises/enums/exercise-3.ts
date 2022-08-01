export {} // empty export to ensure the compiler treats this file as a module

enum Planet {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune
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

function describePlanet(planet: Planet): string {
  // this is a reverse mapping
  // essentially we are saying Planet[index]
  // It is similar to accessing an index on an object
  return `${Planet[planet]} is a ${getPlanetType(planet)}`
}

console.log(describePlanet(Planet.Mars))
// console.log(describePlanet(Planet.Saturn))

for (let i = 0; i < 8; i ++) {
  console.log(describePlanet(i));
}
