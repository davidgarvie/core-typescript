export const customers = [
  {
    name: "Alec Baldfin",
    email: "alec@skillerwhale.com",
    purchases: 20,
    complaints: 0,
  },
  {
    name: "Catfish Stevens",
    email: "catfish@skillerwhale.com",
    purchases: 12,
    complaints: 156,
  },
  {
    name: "Eel Pacino",
    email: "eel@skillerwhale.com",
    purchases: 43,
    complaints: 26,
  },
  {
    name: "Ernest Herringway",
    email: "ernest@skillerwhale.com",
    purchases: 10,
    complaints: 76,
  },
  {
    name: "George Orwhale",
    email: "george@skillerwhale.com",
    purchases: 93,
    complaints: 3,
  },
  {
    name: "Richard Herring",
    email: "richard@skillerwhale.com",
    purchases: 66,
    complaints: 8,
  },
  {
    name: "Skate Winslet",
    email: "skate@skillerwhale.com",
    purchases: 16,
    complaints: 44,
  },
  {
    name: "Turbut Hoover",
    email: "turbut@skillerwhale.com",
    purchases: 73,
    complaints: 0,
  },
  {
    name: "Ringo Starfish",
    email: "ringo@skillerwhale.com",
    purchases: 11,
    complaints: 9,
  },
  {
    name: "Whoopi Goldfish",
    email: "whoopi@skillerwhale.com",
    purchases: 583,
    complaints: 34,
  },
]

export function findUnhappyCustomers(purchasesCutOff, complaintsThreshold) {
  return customers.filter(
    (c) => c.purchases <= purchasesCutOff && c.complaints >= complaintsThreshold
  )
}

export function logCustomer({ name, email }, includeEmail) {
  if (includeEmail) {
    console.log(` - ${name} (${email})`)
  } else {
    console.log(` - ${name}`)
  }
}
