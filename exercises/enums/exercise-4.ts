export {} // empty export to ensure the compiler treats this file as a module

enum Planet {
  Mercury,
  Venus,
  Earth,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
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
  return `${Planet[planet]} is a ${getPlanetType(planet)}`
}

// for (let i = 0; i < 8; i += 1) {
//   console.log(describePlanet(i))
// }

// function isPlanet (planet: Planet | any): planet is Planet {
//   return Planet[planet] !== undefined;
// }

// Object.values(Planet).filter(x => typeof x === "number").forEach(planet => {
//   if (isPlanet(planet)) {
//     console.log(describePlanet(planet))
//   }
// })

// Henry Solution
const isPlanet = (x: unknown): x is Planet => typeof x === "number" && Planet[x] !== undefined;
const planets = Object.values(Planet).filter(isPlanet).map(x => console.log(describePlanet(x)));

