import {
  displayAdmin,
  displaySubscriber,
  displayTrialUser,
  taggedUsers as users,
} from "./users"

type User =
  | { tag: 'Admin', value: Admin }
  | { tag: 'Subscriber', value: Subscriber }
  | { tag: 'TrialUser', value: TrialUser }
  | { tag: 'Anonymous'}

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

type Response = {
  redirect: (path: string) => void
}

function displayUser (user: User): string {
  switch(user.tag) {
    case "Admin":
      return displayAdmin(user.value);
    case "Subscriber":
      return displaySubscriber(user.value);
    case "TrialUser":
      return displayTrialUser(user.value);
    case "Anonymous":
      return 'anonymous user'
  }
}

function exhaustivenessCheck(value: never): never {
  throw new Error('failed to cover all cases')
}

function homePageRedirect(user: User, response: Response): void {
  switch (user.tag) {
    case "Subscriber":
      response.redirect(`/subscriber/${user.value.subscriptionType}`)
      break
    case "TrialUser":
      response.redirect("/free-trial")
      break
    case "Admin":
      response.redirect(`/admin/${user.value.superAdmin ? "full" : ""}`)
      break
    case 'Anonymous':
      response.redirect('login');
      break
    default:
      // this will result in a build error if we do include the case for anonymous
      // this is because the type of user could be of type { tag: "Anonymous"; }
      // this type will be never when we have exhautively checked all possible types of user
      // we do this by switching over the tag
      // const exhaustivenessCheck: never = user;
      exhaustivenessCheck(user);
  }
}



users.forEach(user => console.log(displayUser(user)))

// helper function shared by Henry

// function exhaustivenessCheck(value: never): never {
//   throw new Error('failed to cover all cases')
// }

// switch (user.tag) {
//  case 'Admin': ...
//  default:
//    exhaustivenessCheck(user)
// }

