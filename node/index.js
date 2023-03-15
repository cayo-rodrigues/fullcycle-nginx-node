const express = require("express")
const mysql = require("mysql2/promise")

const app = express()
const PORT = process.env.PORT || 8080

const getRandomName = () => {
  const randomNames = ["zeca roceiro", "zé carroceiro", "limãozinho", "michael jackson", "mel gibsa"]
  return randomNames[Math.floor(Math.random() * randomNames.length)]
}

app.get("/", async (req, res) => {
  let html = "<h1>Full Cycle Rocks!</h1>"
  
  const connection = await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fulldb',
  });

  await connection.execute("INSERT INTO people (name) VALUES (?)", [getRandomName()])
  const [people] = await connection.execute("SELECT * FROM people")
  await connection.end()
  console.log(people)
  
  let names = ""
  for (let person of people) {
    names += `<li>${person.name}</li>`
  }
  
  html += `<ul>${names}</ul>`

  return res.send(html)
})

app.listen(PORT, () => console.log(`\nRunning at http://localhost:${PORT}\n`))