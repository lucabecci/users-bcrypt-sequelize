const { Router } = require("express");
const router = Router();
const { getTasks, getTaskByID } = require("../controllers/task.controller");

router.get("/", getTasks);
router.get('/:id', getTaskByID)
module.exports = router;
