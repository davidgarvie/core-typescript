export {} // empty export to ensure the compiler treats this file as a module

type Person = {
  name: string;
  isSubscribed: boolean;
}

type SubscribedPerson = UnsubscribedPerson & {
  subscriptionLevel: string;
  emailConsent: boolean
}

type UnsubscribedPerson = Person;


// More aggressive and read only type definition
// type SubscribedPerson = {
//   name: string,
//   readonly isSubscribed: true,
//   subscriptionLevel: string,
//   emailConsent: boolean
// }

// type UnsubscribedPerson = {
//   name: string,
//   readonisSubscribed: false
// }




function generateSubscriptionDetails () {
  return {
    subscriptionLevel: "Bronze",
    emailConsent: true,
  }
}

// The return type is a union 
// The function can return either SubscribedPerson or UnsubscribedPerson
function addSubscriptionDetails (person: { name: string }, signedUp: boolean): SubscribedPerson | UnsubscribedPerson {
  if (signedUp) {
    const { subscriptionLevel, emailConsent } = generateSubscriptionDetails()
    return {
      name: person.name,
      isSubscribed: true,
      subscriptionLevel,
      emailConsent,
    }
  } else {
    return { name: person.name, isSubscribed: false }
  }
}

const dylanSubscription = addSubscriptionDetails({ name: "Dylan "}, true )
const islaSubscription = addSubscriptionDetails({ name: "Isla"}, false)

console.log(`Dylan's subscription is`, { dylanSubscription })
console.log(`Isla's subscription is` ,{ islaSubscription })
