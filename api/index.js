import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 5001

app.use(
  cors({
    origin: true,
    credentials: true,
  })
)
app.get("/me", (req, res) => {
  res.send({ name: "Hoi", email: "demo@gmail.com", age: 26 })
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
