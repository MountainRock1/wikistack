const Sequelize = require('sequelize');
// const { toDefaultValue } = require('sequelize/types/lib/utils');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Tom"
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = { db, Page, User };

