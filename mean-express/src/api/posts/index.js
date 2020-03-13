const { Router } = require('express')
const router = Router()

router.get('/', require('./list'))
router.post('/', require('./create'))
router.get('/:slug', require('./show'))

module.exports = router