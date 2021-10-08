((bcryptHelper) => {
    const bcrypt = require('bcryptjs');
    
    bcryptHelper.comparePassword = async(password, oldPassword) => {
        return bcrypt.compare(password, oldPassword);
    }

    bcryptHelper.hashedPassword = async(password) => {
        return bcrypt.hash(password, parseInt(process.env.SALT_ROUND));
    }

})(module.exports);