const userModel = require('../models/user.modle');

const userServices = {
    getByEmail : (email) => {
        return userModel.findOne({email})
    },
    create : (data) => {
        const newUser = new userModel(data);
        return newUser.save();
    },
    update : (data) => {
        console.log(data)
        return userModel.findOneAndUpdate({email : data.email},{$set : {password : data.password}}, {new : true})
    }
}

module.exports = userServices;