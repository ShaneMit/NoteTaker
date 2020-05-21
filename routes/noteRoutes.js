const router = require('express').Router()
const index = require('../public/assets/js/index.js')

router.get('/notes', (req, res) => {
  let notes = list.getNotes()
})

router.post()

router.delete()

module.exports = router