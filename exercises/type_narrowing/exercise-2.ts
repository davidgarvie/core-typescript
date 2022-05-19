import { users } from './users'

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

function displayAdmin(admin: Admin): string {
  return admin.superAdmin ? "super admin" : "admin user"
}

function displaySubscriber(subscriber: Subscriber): string {
  return `${subscriber.subscriptionType} user`
}

function displayTrialUser(trialUser: TrialUser): string {
  return `trial user (until ${trialUser.trialEnds.toLocaleDateString()})`
}

function displayUsers (value?: User | User[]): string {
  // const isArray = false
  // const isAdmin = false
  // const isSubscriber = false
  // const isTrialUser = false

  if (Array.isArray(value)) {
    return value.map(displayUsers).join('\n')
  }

  if (typeof value === "undefined") {
    return 'no users'
  }

  if ("superAdmin" in value) {
    return displayAdmin(value)
  }

  if ("subscriptionType" in value) {
    return displaySubscriber(value)
  }

  // or i can also remove this last if statement check
  if ("trialEnds" in value) {
    return displayTrialUser(value)
  }

  // we need to explicitly return the string
  return 'no users'
}

console.log(displayUsers(users))
