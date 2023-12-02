const userServices = require("../services/user.Svc");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    register : async(req, res) => {
        try {
            const user = await userServices.getByEmail(req.body.email);
            if(user){
                res.status(409),
                res.send({
                    error : "conflict",
                    description :'email already exists please enter valid email'
                })
            }else {
                const hashPassword = await bcrypt.hash(req.body.password, 5);
                req.body.password = hashPassword;
                const newUser = await userServices.create(req.body);
                res.status(201);
                res.send ({
                    status : "user added sucessfully",
                    data : newUser
                });
            }
        }catch(error){
            res.status = (500),
            res.send({
                error : "server error",
                description : error
            })
        }
    },
    login : async(req, res) => {
       try {
         const user = await userServices.getByEmail(req.body.email);
         if(user){
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
            if(isPasswordMatch){
                const token = await jwt.sign({email : user.email, userId : user._Id}, process.env.SECRET, {expiresIn : '1hr'});
                res.status(200);
                res.send({
                    status : "user login sucessfull",
                    data : {
                        userId : user._id,
                        email : user.email
                    },
                    token
                })
            } else {
                res.status(400);
                res.send({
                    error : "invalid password",
                    description : "passwor doesn't match"
                })
            }
         } else {
            res.status(400);
            res.send({
                error : "login failed",
                description : "user not found"
            })
         }
       }catch(error){
            res.status = (500),
            res.send({
                error : "server error",
                description : error
            })
       }
    },
    update : async (req, res) => {
        // console.log(req.body)
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 5);
            req.body.password = hashPassword;
            // console.log(req.body);
            const user = await userServices.update(req.body);
            if(user){
                res.status(200);
                res.send({
                    status : "updated",
                    data : user
                })
            }else {
                res.status(400);
                res.send({
                    error : "invalid email",
                    description : "email not match"
                });
            }
        }catch(error){
            res.send({
                error : "server error",
                description : error
            })
        }
    }
}

module.exports = userController;