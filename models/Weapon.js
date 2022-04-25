const mongoose = require('mongoose')

const WeaponSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  rarity: {
    type: String,
    default: "Legendary"
  },
  location: {
    type: String,
    required: false
  },
  boss: {
    type: String,
    default: "World Drop"
  },
  image: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Weapons', WeaponSchema)