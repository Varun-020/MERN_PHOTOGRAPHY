const Contact = require("../models/contact");
const nodemailer = require('nodemailer');
require('dotenv').config();

transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: process.env.USER,
            pass: process.env.PASS
         },
    secure: true,
});

module.exports.contact =async(req,res)=>{
    const {name,email,contact,subject,message} = req.body;
    const mailData = {
        from: process.env.USER,  // sender address
        to: process.env.RECEIVER,   // list of receivers
        subject: subject,
        text: `Ref contact Sudam Photography` ,
        html :` <br/><b>Hey Sudam You have one visitor </b><br/>
        <br> Name:${name}<br/> 
        <br> Email:${email}<br/> 
        <br> Contact:${contact}<br/> 
        <br><b> Message:${message}</b><br/>`
    }
    const errors=[];
    if(!name || !email || !contact || !subject || !message){
        errors.push({msg:"Enter all fields"})
    }
    if(contact?.length !=10){
        errors.push({msg:"contact must be 10 digit"})
    }
    if(errors?.length>0){
        return res.status(400).json({errors:errors});
    }else{
        try {
            const {response} = await Contact.create({
                name,email,contact,subject,message
            })
            transporter.sendMail(mailData, function (err, info) {
                if(err)
                  console.log(err)
            });
            return res.status(200).json({msg:"Data submitted successfully",response});
        } catch (error) {

            return res.status(500).json({errors:error.message});
        }
    }
};