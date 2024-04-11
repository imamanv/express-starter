const { people } = require("./data");

const express = require("express");
const app = express();

app.use(express.json());

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ newPeople });
});

app.listen(3000);
