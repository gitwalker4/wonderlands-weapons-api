const express = require('express')
const router = express.Router()
const Weapon = require('../models/Weapon')

//Get All Weapons
router.get('/', async (req, res) => {
  try {
    const weapons = await Weapon.find()
    res.json(weapons)
  } catch(err) {
    res.json({message: err})
  }
})

//Submits Weapon
router.post('/', async (req, res) => {
  const weapon = new Weapon({
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    type: req.body.type,
    rarity: req.body.rarity,
    location: req.body.location,
    boss: req.body.boss,
    image: req.body.image
  })

  try {
    const savedWeapon = await weapon.save()
    res.json(savedWeapon)
  } catch(err) {
    res.json({message: err})
  }
})

//Specific Weapon
router.get('/:weaponId', async (req, res) => {
  try {
    const specificWeapon = await Weapon.findById(req.params.weaponId)
    res.json(specificWeapon)
  } catch(err) {
    res.json({message: err})
  }
})

//Delete Weapon
router.delete('/:weaponId', async (req, res) => {
  try {
    const removedWeapon = await Weapon.remove({_id: req.params.weaponId})
    res.json(removedWeapon)
  } catch(err) {
    res.json({message: err})
  }
})

//Update Weapon 
router.patch('/:weaponId', async (req, res) => {
  try {
    const updatedWeapon = await Weapon.updateOne(
      {_id: req.params.weaponId}, 
      {$set: {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        type: req.body.type,
        rarity: req.body.rarity,
        location: req.body.location,
        boss: req.body.boss,
        image: req.body.image
      }}
    )
    res.json(updatedWeapon)
  } catch(err) {
    res.json({message: err})
  }
})

module.exports = router