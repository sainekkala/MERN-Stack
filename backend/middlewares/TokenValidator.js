const jwt = require('jsonwebtoken');

const validateToken = async(req, res, next) => {
    try{
        const token = req.headers.authorization;
        if(token){
            const validToken = jwt.verify(token, process.env.SECRET);
            if(validToken){
                next();
            }
        }else{
            res.status(400);
            res.send({
                error : "unautherized request",
                description : "token is required"
            })
        }
    }catch(error){
        if(error instanceof jwt.JsonWebTokenError){
            res.status(400);
            res.send({
               error : "unauthorized_request",
               description : "token is expired"
            })
          }else{
            res.status(500);
            res.send({
               error :"internal server error"
            })
          }
    }
}

module.exports = validateToken;