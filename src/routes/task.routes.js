const { Router } = require('express');
const router = Router();
const { getTasks } = require('../controllers/task.controller')

router.get('/', getTasks)


module.exports = router