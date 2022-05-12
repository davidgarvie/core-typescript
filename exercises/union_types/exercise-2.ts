export {} // empty export to ensure the compiler treats this file as a module

type SubscriptionDetails = {
  name: string
  subscriptionType: string
  access: string
}

type SubscriptionType = "Gold" | "Silver" | "Bronze" | "None";

// can pipe before first type to make it more readable
type AccessType = | "Everything" | "Resources" | "Newsletter" | "Nothing";

function getAccessDetails (subscriptionType: SubscriptionType): AccessType {
  switch (subscriptionType) {
    case "Gold":
      return "Everything"
    case "Silver":
      return "Resources"
    case "Bronze":
      return "Newsletter"
    case "None":
      return "Nothing"
    default:
      throw new Error(`Invalid subscription type ${subscriptionType}`)
  }
}

function addSubscriptionDetails (person: { name: string }, subscriptionType: SubscriptionType = 'None'): SubscriptionDetails {
  let access = getAccessDetails(subscriptionType)
  return { name: person.name, access, subscriptionType }
}

const person = { name: 'John' }
// compilation error
// const subscribedPerson = addSubscriptionDetails(person, 'Brass')

const subscribedPerson = addSubscriptionDetails(person, 'Bronze')
console.log(`Subscribed person: `, { subscribedPerson })

const unSubscribedPerson1 = addSubscriptionDetails(person)
console.log(`Unsubscribed person 1: `, { unSubscribedPerson1 })

const unSubscribedPerson2 = addSubscriptionDetails(person, "None")
console.log(`Unsubscribed person 2`, { unSubscribedPerson2 })
