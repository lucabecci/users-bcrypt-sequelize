const getUsers = (req, res) => {
    return res.send('users')
  }
  
  const getUserByID = (req, res) =>{
    res.send('user: 2')
  }
  
  
  module.exports = {
    getUsers,
    getUserByID
  }
  