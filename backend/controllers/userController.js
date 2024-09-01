import User from "../models/User.js";


// Update existing User
export const updateUser = async (req, res) => {
    const id = req.params.id;

    try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update user", error: error.message });
    }
};

// Delete existing User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const existingUser = await User.findById(id);
        if (!existingUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete user", error: error.message });
    }
};

// Get single User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const singleUser = await User.findById(id);
        if (!singleUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: singleUser });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed to fetch user", error: error.message });
    }
};

// Get all Users
export const getAllUser = async (req, res) => {

    console.log("getAllUser");
    
    try {
        const allUsers = await User.find();
        res.status(200).json({ success: true, count: allUsers.length, data: allUsers });
    } catch (error) {
        res.status(404).json({ success: false, message: "Failed to fetch all users", error: error.message });
    }
};
