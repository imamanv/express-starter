const { people } = require("../../data");

const changePeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const newPeople = people.map((person) => {
    if (person.id === +id) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ newPeople });
};

module.exports = changePeople;
