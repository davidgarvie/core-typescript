export {} // empty export to ensure the compiler treats this file as a module

const state = {
  difficulty: "easy",
  score: 0,
  gameOver: false,
}

function makeSetDifficulty(difficulty: string): Action {
  return { message: "set-difficulty", value: difficulty };
}

function makeAddPoints(points: number) : Action {
  return { message: "add-points", value: points };
}

function makeSetGameOver(gameOver: boolean) : Action {
  return { message: "set-game-over", value: gameOver };
}

type Action = {
  message: "set-difficulty",
  value: string
} | {
  message: "add-points",
  value: number
} | {
  message: "set-game-over",
  value: boolean
}

type Message = Action["message"];

// This is a compilation error
// const badAction: Action = {
//   message: "set-difficulty",
//   value: true
// }

function handleAction(action: Action): void {
  switch (action.message) {
    case "set-difficulty":;
      state.difficulty = action.value;
      break
    case "add-points":
      const score = action.value;
      state.score += score;
      break
      case "set-game-over":
      const gameOver = action.value;
      state.gameOver = gameOver;
      break
  }
}

console.log("Initial state:", state)

handleAction(makeSetDifficulty("hard"))
handleAction(makeAddPoints(5))
handleAction(makeSetGameOver(true))

console.log("New state:", state)
