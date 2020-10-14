const express = require("express")
const app = express()
const axios = require("axios")
const util = require("util")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api", (req, res) => {
  axios.get("https://randomuser.me/api/").then((resp) => {
    console.log(util.inspect(resp.data.results, true, 4))
    const user = resp.data.results[0]
    res.json({
      id: user.login.uuid,
      first: user.name.first,
      last: user.name.last,
      imgLarge: user.picture.large,
      imgMedium: user.picture.medium,
      imgThumbnail: user.picture.thumbnail,
      phone: user.phone,
      email: user.email,
    })
  })
})

let usersIsGoing = []
let usersNotGoing = []

app.get("/api/IsGoing", (req, res) => {
  res.json(usersIsGoing)
})

app.get("/api/NotGoing", (req, res) => {
  res.json(usersNotGoing)
})

app.post("/api/mark-invitee", (req, res) => {
  if (req.body.going === true) {
    usersIsGoing.push(req.body)
  } else {
    usersNotGoing.push(req.body)
  }
  console.log(usersIsGoing)
  res.json({ success: "true" })
})

// app.post("/api/mark-invitee", (req, res) => {
//   usersIsGoing.push(req.body)
//   res.json({ success: "true" })
// })

// app.post("/api/mark-invitee", (req, res) => {
//   usersNotGoing.push(req.body)
//   res.json({ success: "true" })
// })

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})

// app.get("/api", async (req, res) => {
//     const resp = await axios.get("https://randomuser.me/api/")
//     const user = resp.data.results[0]
//     res.json({
//       id: user.login.uuid,
//       first: user.name.first,
//       last: user.name.last,
//       imgLarge: user.picture.large,
//       imgMedium: user.picture.medium,
//       imgThumbnail: user.picture.thumbnail,
//       phone: user.phone,
//       email: user.email,
//     })
//   })

// app.patch("/api/IsGoing", (req, res) => {
//   const { id } = req.params
//   const body = req.body
//   usersIsGoing = usersIsGoing.map((user) => {
//     if (user.id == id) {
//       for (let inviteStatus in user) {
//         if (inviteStatus in body) {
//           user[inviteStatus] = body[inviteStatus]
//           return user
//         }
//       }
//     }
//     return user
//   })
// })

// app.patch("/api/NotGoing", (req, res) => {
//   const { id } = req.params
//   const body = req.body
//   usersNotGoing = usersNotGoing.map((user) => {
//     if (user.id == id) {
//       for (let inviteStatus in user) {
//         if (inviteStatus in body) {
//           user[inviteStatus] = body[inviteStatus]
//           return user
//         }
//       }
//     }
//     return user
//   })
// })
