import { formatName } from "./lib"

print({ name: "tomatoes", quantity: 800, measurement: "grams" }, 2)
print({ name: "basil", quantity: 5, measurement: "leaves" }, 2)

// Prints an ingredient to the console. Returns a string containing
// the number of servings.

type Ingredient = {
  name: string;
  measurement: string;
  readonly quantity: number;
  preperation?: string;
}

const garlic: Ingredient = {
  name: 'garlic',
  measurement: 'cloves',
  quantity: 1,
  preperation: 'sliced'
}

print(garlic, 2);
print(garlic, 2);

function print (ingredient: Ingredient, servings: number): string {
  let firstLine = `${formatName(ingredient.name)}:`
  let secondLine = `  ${ingredient.quantity} ${ingredient.measurement} per person`
  let thirdLine = `  ${ingredient.quantity * servings} ${ingredient.measurement} in total`

  console.log(firstLine)
  console.log(secondLine)
  console.log(thirdLine)

  return `Servings: ${servings}`
}

// Uncomment the code below for Exercise 3

// 1. Create new variable and cast
// const chilli = { name: 'chilli', quantity: 1, measurement: 'whole', preparation: 'chopped and deseeded', colour: 'red' } as Ingredient

// 2. Cast inline
// print({ name: 'chilli', quantity: 1, measurement: 'whole', preparation: 'chopped and deseeded', colour: 'red' } as Ingredient, 2)

// how can we make the argument an ingredient without excess property checks?
// 3. paas in a variable without specifying type
const chilli = { name: 'chilli', quantity: 1, measurement: 'whole', preparation: 'chopped and deseeded', colour: 'red' }
print(chilli, 2)


/* Personal notes

- readonly prevents object properties being re-assigned
- quite useful to guard against accidental mutations
- will not protect against objects being mutated

Ingredient.quantity = "foo" // would give us a compliation error

- shorthand to create objects with ALL types read only
type Ingredient = Readonly<{
 foo: 'bar'
}>


Function type expressions

type SendMessageFunction = (messages: Message[], saveLocalCopy: boolean) => string


*/ 


