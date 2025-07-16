const User = require('../models/User');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
exports.login=async (req,res)=>{
    const {email,password}=req.body;
    try{
    const user=await User.findOne({email});
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const isMatch=user.password===password;
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    // Create JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    res.json({ token });
    } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}