const router = require('express').Router()
const {Garb} = require('../db/models')
module.exports = router

router.get('/:userId/:type', async (req, res, next) => {
  try {
    const garbs = await Garb.findAll({
      where: {
        userId: req.params.userId,
        type: req.params.type
      }
    })
    res.json(garbs)
  } catch (err) {
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try {
    const garbs = await Garb.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(garbs)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const garb = await Garb.create({
      type: req.body.type,
      warmthLevel: req.body.warmthLevel,
      timesWorn: 0,
      userId: req.body.userId,
      imageUrl: req.body.imageUrl
    })
    res.json(garb)
  } catch (err) {
    next(err)
  }
})
