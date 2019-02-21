const router = require('express').Router()
const {Garb} = require('../db/models')
module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const garbs = await Garb.findAll({
      userId: req.params.userId
    })
    res.json(garbs)
  } catch (err) {
    next(err)
  }
})
