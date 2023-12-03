// Middleware: think of it as intercepting HTTP requests to perform checks.
// In this case, we want to authenticate users before proceeding to the next steps

// Necessary packages
const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        // Error: token does not exist
        if(!token){
            return res.status(401).json({ msg: 'No auth token, access denied'});
        }

        // Error: token cannot be verified (invalid, expired, etc.)
        const verified = jwt.verify(token, "passwordKey");
        if(!verified){
            return res.status(401).json({ msg: 'Token verficiation failed, authorization denied.'});
        }

        // Since the token was made out of the document id
        req.user = verified.id;
        next();
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}




// Export
module.exports = auth;