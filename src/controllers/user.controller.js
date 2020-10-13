const User = require('../models/User')
const { encryptPsw } = require('../functions/pswFunctions')

//functions helpers
const checkCamps = require('../functions/checkRegister');

const register = async (req, res) => {
  let { id, name, lastname, email, password, age } = req.body;
  //checkeamos si todos los campos existen
  const checked = checkCamps(name, lastname, email, password, age )
  if(checked === false){
    return res.send('CHECK ALL CAMPS AND TRY AGAIN.')
  }
  //hasheamos el pswd del usuario
  password = await encryptPsw(password)
  // guardamos en db el nuevo usuario
  const newUser = await User.create({
    id,
    name,
    lastname,
    email,
    password,
    age
  },{
    fields: ['id', 'name', 'lastname', 'email', 'password', 'age']
  })
  //res
  res.json({
    register: true,
    userCreated: newUser
  })
};
module.exports = {
  register
};
