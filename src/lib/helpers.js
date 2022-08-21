const bcrytp = require('bcryptjs');
const helpers = {};

//encrypt password
helpers.encriptar = async(password) => {
        const salt = await bcrytp.genSalt(10);
        const hash = await bcrytp.hash(password, salt);
        return hash;
        //hash is th final password
        //if you can execute gentsalt many times, your password will be very good. gensalt(10), it is ok.
    }
    //compare password
helpers.compararclave = async(password, savedPassword) => {
    try {
        //si no se ejecuta el return. no va a funcionar la comparacion de claves
        return await bcrytp.compare(password, savedPassword)
    } catch (error) {
        console.log(error)
    }
}



module.exports = helpers;