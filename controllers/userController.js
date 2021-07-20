const {body,validationResult} = require("express-validator");
const User = require("../models/user");
const Gallery = require('../models/image');
const Offer = require('../models/offer');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerValidations=[
    body("name").not().isEmpty().withMessage("name required"),
    body("email").isEmail().withMessage("email required"),
    body("password").isLength({min:8}).withMessage("password must be 8 characters minimum "),
];

module.exports.register = async(req,res)=>{
    const {name,email, password} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});
    try {
        const checkUser = await User.findOne({email});
        if(checkUser) return res.status(400).json({errors:[{msg:"Email is already taken"}]});
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        try {
            const user = await User.create({
                name,email,password:hash
            });
            const token = jwt.sign({user},process.env.SECRET,{expiresIn:'7d'});
            return res.status(200).json({msg:"Registration Successful",token});
        } catch (error) {
            return res.status(500).json({errors:error.message})
        }
        
    } catch (error) {
        return res.status(500).json({errors:error})
    }
};

module.exports.loginValidations=[
    body("email").isEmail().withMessage("email required"),
    body("password").not().isEmpty().withMessage("password required"),
];
module.exports.login = async(req,res)=>{
    const {email,password} = req.body;
    const errors= validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors:errors.array()});
    try {
        const user = await User.findOne({email});
    if(user){
        const matched = await bcrypt.compare(password,user.password);
        if(matched){
            const token = jwt.sign({user},process.env.SECRET,{expiresIn:'7d'});
            return res.json({msg:"Login Successful",token});
        }else{
            return res.status(401).json({errros:[{msg:"Password is not correct"}]});
        }
    }else{
        return res.status(404).json({errors:[{msg:"User not found"}]});
    }
    } catch (error) {
        return res.status(500).json({errors:error});
    }
    
};

module.exports.gallery = async(req,res)=>{
    try{
        const gallery = await Gallery.find();
        return res.status(200).json({msg:'All Images fetched',gallery});
    }catch(error){
        return res.status(500).json({errors:error});
    }

}
module.exports.offer = async(req,res)=>{
    try{
        const offer = await Offer.find();
        return res.status(200).json({msg:'All Offer fetched',offer});
    }catch(error){
        return res.status(500).json({errors:error});
    }

}
module.exports.deleteOffer = async (req, res) => {
	
	try {
        const query = { name: { $type: "string" } };
		const response = await Offer.deleteOne(query);
		return res.status(200).json({ msg: 'Your Offer has been deleted' });
	} catch (error) {
		return res.status(500).json({ errors: error, msg: error.message });
	}
};

module.exports.deleteImage = async (req, res) => {
	const id = req.params.id;
	try {
		const response = await Gallery.findByIdAndRemove(id);
		return res.status(200).json({ msg: 'Your Image has been deleted' });
	} catch (error) {
		return res.status(500).json({ errors: error, msg: error.message });
	}
};