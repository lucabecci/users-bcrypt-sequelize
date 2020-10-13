const checkCamps = (name, lastname, email, password, age) => {
    if(name ==  null || 
        lastname == null || 
        email == null || 
        password == null || 
        age == null){
            return false
        }else{
            return true
        }
}

module.exports = checkCamps