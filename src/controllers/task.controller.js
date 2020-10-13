const getTasks = (req, res) => {
  res.send("tasks");
};

const getTaskByID = (req, res) => {
  res.send("task 1");
};

module.exports = {
  getTasks,
  getTaskByID,
};
