export {} // empty export to ensure the compiler treats this file as a module

type Subscriber = {
  name: string,
  subscriptionType: string
}

type TrialUser = {
  name: string,
  subscriptionType: string,
  trialEnds: Date
}

type Admin = {
  name: string,
  superAdmin: boolean
}


// The tag is now a discriminating properties
// They are added in the union type so that we do not need to maintain these properties inside the original type definitions

type User = 
| { tag: 'Subscriber' } & Subscriber
| { tag: 'TrialUser' } & TrialUser
| { tag: 'Admin' } & Admin
| { tag: "Anonymous"}

function getDescription (user: User): string {
  switch (user.tag) {
    case 'Subscriber':
      return `${user.name} is a subscriber with a ${user.subscriptionType} subscription`
    case "TrialUser":
      return `${user.name} is on a trial subscription which ends on ${user.trialEnds}`
    case 'Admin':
      return `${user.name} is an admin with ${user.superAdmin ? 'full' : 'partial'} admin rights`
    case 'Anonymous':
      return `User is Anonymous`
  }
}

console.log(getDescription( { name: "Dylan", tag: "Subscriber", subscriptionType: "bronze" }))
console.log(getDescription( { name: "Isla", tag: "TrialUser", subscriptionType: "bronze" , trialEnds: new Date()}))
console.log(getDescription( { name: "Sarah", tag: "Admin", superAdmin: true }))
console.log(getDescription( { name: "David", tag: "Admin", superAdmin: false }))
console.log(getDescription( { tag: "Anonymous" }))
