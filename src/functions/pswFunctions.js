const bcrypt = require('bcrypt')

const encryptPsw  = async(password) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password
}

module.exports = {
    encryptPsw
}