const getTasks = (req, res) =>{
    res.send('tasks')
}

const getTaskofUser = (req, res) => {
    res.send('task 1')
}

module.exports = {
    getTasks,
    getTaskofUser
}