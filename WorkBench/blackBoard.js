
messages = [
  "Happy Valentine's Day!",
  "You're a Star!",
  "Keep on shining!",
  "There's no one in the world like you!",
  "Have a [adj] V. Day!",
  "You make the world bright",
  "Life is better with you",
  "The world is lucky to have you",
  "You are > Gold",
  "The story of your life is wonderful, cuz you're in it!",
  "You make it easy to have charity",
  "You Rock!",
  "No one compares to you",
  "Everyone deserves a valentine",
  "Hey there beautiful!",
  "Loving you is easy",
  "Heavenly Father loves His daughters!",
  "Can't stop loving ya",
  "Sugar, Spice, and Everything nice = You",
  "Happy Valentine's Day"
];

stickyNotes = [
  {"color" : "Yellow", "owner" : "Wil"},
  {"color" : "lime", "owner" : "Wil"},
  {"color" : "green", "owner" : "Kyle"},
  {"color" : "blue", "owner" : "Kyle"},
  {"color" : "orange", "owner" : "table"},
]

markerColor = [
  "black",
  "silver",
  "gold",
  "purple",
  "other"
]

decor = [
  "hearts",
  "stars",
  "smiley faces",
  "swirls",
  "X and O",
  "pops",
  "Initials"
]

messageNumb = Math.floor(Math.random() * (messages.length))
combo = [
  messages[messageNumb],
  stickyNotes[Math.floor(Math.random() * (stickyNotes.length))],
  markerColor[Math.floor(Math.random() * (markerColor.length))],
  decor[Math.floor(Math.random() * (decor.length))]
]


btn = document.getElementById("btn");
msg = document.getElementById("msg");
btn.addEventListener("click", () => {
  msg.textContent = messageNumb+"\n"+messages.length+"\n"+combo[0]+"\n"+combo[1].color+"\n"+combo[2]+"\n"+combo[3]
  console.log(msg.textContent)
})


console.log(messageNumb+"\n"+messages.length+"\n"+combo[0]+"\n"+combo[1].color+"\n"+combo[2]+"\n"+combo[3])