const express = require("express")
const mysql = require("mysql2/promise")

const app = express()
const PORT = process.env.PORT || 3000

const createConnection = async () => {
  return await mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fulldb',
  });
}

const getRandomName = () => {
  const randomNames = ["zeca roceiro", "zé carroceiro", "limãozinho", "michael jackson", "mel gibsa"]
  return randomNames[Math.floor(Math.random() * randomNames.length)]
}

app.get("/", async (req, res) => {
  const connection = await createConnection()
  
  await connection.execute("INSERT INTO people (name) VALUES (?)", [getRandomName()])
  await connection.commit()

  const [people] = await connection.execute("SELECT name FROM people")
  await connection.end()

  const html = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${people.reduce((allNames, {name}) => (
        allNames + `<li>${name}</li>`
      ), "")}
    </ul>
  `

  return res.send(html)
})

app.listen(PORT, () => console.log(`\nRunning at http://localhost:${PORT}\n`))