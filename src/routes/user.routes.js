const { Router } = require('express')
const router = Router()
const { getUsers, getUserByID } = require('../controllers/user.controller')

router.get('/', getUsers)
router.get('/:id', getUserByID)

module.exports = router;