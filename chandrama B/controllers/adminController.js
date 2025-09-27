const User = require("../models/User");

exports.getAllUsers = async (req, res) =>{
    try {
        let users = await User.find({}).select("-password");
        if(!users){
            return res.status(404).send("No Users Found");
        }
        let filteredUsers = users.filter(user=>user.role !== "admin");

        res.status(201).json(filteredUsers);
    } catch (error) {
        res.status(500).send(error.message);
    }
}