import { Previewable } from "./preview"

type Format = "json" | "truncated"

// declare the FormattedPreviewable interface here
interface FormattedPreviewable extends Previewable {
  format: Format;
}

class ChatMessage implements FormattedPreviewable {
  username: string
  body: string
  format: Format;
  label: string = "Chat"

  constructor(username: string, body: string, format: Format) {
    this.username = username
    this.body = body
    this.format = format;
  }

  preview() {
    return `Username: ${this.username}, Message text: ${this.body}`
  }
}

function printFormattedPreview(message: FormattedPreviewable) {
  switch (message.format) {
    case "json":
      console.log(`JSON preview for ${message.label}:`)
      console.log(JSON.stringify(message))
      break
    case "truncated":
      const preview = message.preview()
      const truncatedPreview =
        preview.length > 18 ? `${preview.substring(0, 15)}...` : preview
      console.log(`Truncated preview for ${message.label}:`)
      console.log(truncatedPreview)
      break
  }
}

const chat1 = new ChatMessage("squid", "Hey there @ada!", "json")
const chat2 = new ChatMessage(
  "ada",
  "Hey @squid, is it lunchtime?",
  "truncated"
)

printFormattedPreview(chat1)
printFormattedPreview(chat2)
