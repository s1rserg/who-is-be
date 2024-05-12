const Sequelize = require("sequelize");
const sequelize = require("../util/database");

// Person Model
const Person = sequelize.define('Person', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  patronymic: {
    type: Sequelize.STRING,
    allowNull: true
  },
  photo: {
    type: Sequelize.STRING,
    allowNull: true
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  industry: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {});

// Connections Model
const Connections = sequelize.define('Connections', {
  personId1: {
    type: Sequelize.INTEGER,
    references: {
      model: Person,
      key: 'id'
    }
  },
  personId2: {
    type: Sequelize.INTEGER,
    references: {
      model: Person,
      key: 'id'
    }
  }
}, {});

// Events Model
const Events = sequelize.define('Events', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  personId: {
    type: Sequelize.INTEGER,
    references: {
      model: Person,
      key: 'id'
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  link: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {});

module.exports = {Person, Connections, Events};

// Associations
Person.hasMany(Events, { foreignKey: 'personId' });

// In the Person model file
Person.hasMany(Connections, { foreignKey: 'personId1', as: 'ConnectionsAsPerson1' });
Person.hasMany(Connections, { foreignKey: 'personId2', as: 'ConnectionsAsPerson2' });

// In the Connections model file
Connections.belongsTo(Person, { foreignKey: 'personId1', as: 'Person1' });
Connections.belongsTo(Person, { foreignKey: 'personId2', as: 'Person2' });
