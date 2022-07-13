export {} // empty export to ensure the compiler treats this file as a module

class Contact {
  email: string
  phone: string
  isSubscribedToEmail: boolean
  isSubscribedToSMS: boolean

  constructor(
    email: string,
    phone: string,
    isSubscribedToEmail: boolean,
    isSubscribedToSMS: boolean
  ) {
    this.email = email
    this.phone = phone
    this.isSubscribedToEmail = isSubscribedToEmail
    this.isSubscribedToSMS = isSubscribedToSMS
  }
}

class Message {
  // Include static definitions here

  // Using an object literal
  // static DEFAULT_CONTACT: Contact = {
  //   email: "orcaniser@skillerwhale.test",
  //   phone: "+123 456 78 90",
  //   isSubscribedToEmail: false,
  //   isSubscribedToSMS: false
  // }

  // Initialisation with class 
  static DEFAULT_CONTACT = new Contact(
    "orcaniser@skillerwhale.test",
    "+123 456 78 90",
    false,
    false
  )

  static buildMessages(contacts: Contact[]) : [Email, SMS]{
    const email = new Email(
      Message.DEFAULT_CONTACT,
      contacts1.filter((r) => r.isSubscribedToEmail)
    );
    const sms = new SMS(
      Message.DEFAULT_CONTACT,
      contacts.filter((r) => r.isSubscribedToSMS)
    );

    return [email, sms];
  }

  sender: Contact
  recipients: Contact[]

  constructor(sender: Contact, recipients: Contact[]) {
    this.sender = sender
    this.recipients = recipients
  }
}

class Email extends Message {
  preview() {
    const recipients = this.recipients.map((r) => r.email).join(",")
    console.log(`Email from ${this.sender.email} to ${recipients}`)
  }
}

class SMS extends Message {
  preview() {
    const recipients = this.recipients.map((r) => r.phone).join(", ")
    console.log(`SMS from ${this.sender.phone} to ${recipients}`)
  }
}

const contacts1 = [
  new Contact("ada@plaicebook.test", "+1234560001", true, true),
  new Contact("betty@plaicebook.test", "+1234560002", true, true),
  new Contact("celine@plaicebook.test", "+1234560003", true, true),
]

const contacts2 = [
  new Contact("alex@plaicebook.test", "", true, false),
  new Contact("bob@plaicebook.test", "", true, false),
  new Contact("", "+1234560006", false, true),
]

const messages1 = Message.buildMessages(contacts1);
const messages2 = Message.buildMessages(contacts2);

messages1[0].preview()
messages1[1].preview()

messages2[0].preview()
messages2[1].preview()
