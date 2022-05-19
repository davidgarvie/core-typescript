import { displayUsers, users } from "./users"

type User = Admin | Subscriber | TrialUser

type Admin = {
  name: string
  superAdmin: boolean
}

type Subscriber = {
  name: string
  subscriptionType: string
}

type TrialUser = {
  name: string
  trialEnds: Date
}

// const admins: Admin[] = []
// for (const user of users) {
//   if ('superAdmin' in user) {
//     admins.push(user)
//   }
// }

// function isAdmin(user: User) : user is Admin {
//   return "superAdmin" in user;
// }


// this is a compile error
// the compiler cannot figure out the type because the inline function is opaque
// const admins: Admin[] = users.filter(u => "superAdmin" in u);

const isAdmin = (user: User): user is Admin => "superAdmin" in user;
const admins: Admin[] = users.filter(isAdmin);

console.log(displayUsers(admins))
