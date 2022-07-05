import { Previewable, printPreview } from "./preview"

class Email implements Previewable {
  from: string
  to: string
  subject: string
  body: string
  // compiler will infer that the type of label is "email"
  readonly label = "Email";

  constructor(from: string, to: string, subject: string, body: string) {
    this.from = from
    this.to = to
    this.subject = subject
    this.body = body
  }

  preview() {
    return `To: ${this.to}, From: ${this.from}, Body: ${this.body}`;
  }
}

class SMS implements Previewable {
  number: string
  countryCode: string
  body: string
  // here we are explicitly setting the type as "SMS"
  label: "SMS" = "SMS"
  

  constructor(number: string, countryCode: string, body: string) {
    this.number = number
    this.countryCode = countryCode
    this.body = body
  }

  preview() {
    return `Number: ${this.number}, Country code: ${this.countryCode}, text: ${this.body}`
  }
}

const email = new Email(
  "ada@skillerwhale.com",
  "ceo@skillerwhale.com",
  "working conditions",
  "My tank is as empty as my belly. Please provide more squid as a matter of urgency."
)
const sms = new SMS(
  "09876 543210",
  "44",
  "Whose idea was it to give the orca a company laptop? She won't stop clogging up my inbox. I have more important things to worry about - fix it!"
)

printPreview(email)
printPreview(sms)
