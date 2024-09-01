import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    console.log("verifyToken");
    
    const token = req.cookies.accessToken;
    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }
        req.user = user;
        console.log(("verified"));
        
        next();
    });
};


export const verifyUser = (req, res, next)=>{
    console.log("verifyUser");
    verifyToken(req, res, next,()=>{
        if(req.user.id == req.param.id || req.user.role == 'admin'){
            next()
        } else {
          return res.status(401).json({ success: false, message: "Not authorized", error });
        }
    })
}

export const verifyAdmin = (req, res, next) => {
    console.log("verifyAdmin");
    
    verifyToken(req, res, () => {
        if (req.user && req.user.role === 'admin') {
            console.log(`role: ${req.user.role}`);
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not admin authorized" });
        }
    });
};
