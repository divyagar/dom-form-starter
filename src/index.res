@val external document: {..} = "document"
@val external window: {..} = "window"

let textEditor = document["getElementById"]("textEditor")
let textView = document["getElementById"]("textView")
textView["classList"] = "text-2xl"

let changeTextView = evt => {
  textView["innerText"] = evt["target"]["value"]
}

textEditor["addEventListener"]("input", changeTextView)

let smallRadio = document["getElementById"]("selectSmall")
let regularRadio = document["getElementById"]("selectRegular")
let largeRadio = document["getElementById"]("selectLarge")

smallRadio["addEventListener"]("change", () => textView["classList"] = "text-sm")
regularRadio["addEventListener"]("change", () => textView["classList"] = "text-2xl")
largeRadio["addEventListener"]("change", () => textView["classList"] = "text-6xl")
