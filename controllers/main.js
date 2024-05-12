const { Person, Events, Connections } = require("../models/person");
const { Sequelize, Op } = require("sequelize");

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPersonsByIndustry = async (req, res) => {
  try {
    const industry = req.params.industry;
    const persons = await Person.findAll({ where: { industry } });
    res.json(persons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const id = req.params.id;
    const person = await Person.findByPk(id);
    if (!person) {
      return res.status(404).json({ message: "Person not found" });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get events by person
exports.getEventsByPerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const events = await Events.findAll({ where: { personId } });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get connections by person
exports.getConnectionsByPerson = async (req, res) => {
  try {
    const personId = req.params.id;
    const connections = await Connections.findAll({
      where: {
        [Op.or]: [{ personId1: personId }, { personId2: personId }],
      },
      include: [
        {
          model: Person,
          as: "Person1",
        },
        {
          model: Person,
          as: "Person2",
        },
      ],
    });

    const connectedPersons = [];

    connections.forEach((connection) => {
      if (connection.Person1.id != personId) {
        connectedPersons.push(connection.Person1);
      }
      if (connection.Person2.id != personId) {
        connectedPersons.push(connection.Person2);
      }
    });

    res.json(connectedPersons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
