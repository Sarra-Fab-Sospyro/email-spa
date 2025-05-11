const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

app.use(cors({ origin: "http://localhost:4200" }));

app.get("/api/users", (req, res) => {
  const filePath = path.join(__dirname, "data", "users.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send({ error: "Errore nel recuperare i dati" });
    }
    res.send(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Mock server in ascolto su http://localhost:${PORT}`);
});
