import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


// create new user 
export const registerUser = async (req, res) => {
    console.log("register");
    
    try {
        // Hash the password before saving it to the database
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password:hashPassword,
            photo: req.body.photo,
        })
        await newUser.save()
        newUser.password = undefined
        res.status(200).json({ succuss: true, data: newUser })
    } catch (error) {
        res.status(500).json({ succuss: false, message: "Failed to create user" , error: error})

    }
}


export const loginUser = async (req, res) => {
    console.log("Hello");

    const email = req.body.email;
    try {
        const loginUser = await User.findOne({ email });

        if (!loginUser) {
            return res.status(404).json({ success: false, message: "User Not Found" });
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, loginUser.password);

        if (!checkCorrectPassword) {
            return res.status(401).json({ success: false, message: "Password is wrong" });
        }

        const { password, role, ...rest } = loginUser._doc;

        const token = jwt.sign(
            { id: loginUser._id, role: loginUser.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '5d' }
        );

        res.status(200).cookie('accessToken', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) // 5 days in milliseconds
        }).json({ success: true, token, data: {...rest}, role});
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to login", error });
    }
};



export const logoutUser = (req, res) => {
    try {
        res.status(200).cookie('accessToken', '', {
            httpOnly: true,
            expires: new Date(0), // Set the cookie expiration date to the past to remove it
        }).json({ success: true, message: "Successfully logged out" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to logout", error });
    }
};


