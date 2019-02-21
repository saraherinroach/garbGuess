const Sequelize = require('sequelize')
const db = require('../db')

const Garb = db.define('garb', {
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://target.scene7.com/is/image/Target/GUEST_5722806b-5fc2-4cd0-b619-a7e5f2ea2726?wid=488&hei=488&fmt=pjpeg'
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  warmthLevel: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  occasion: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  timesWorn: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Garb
