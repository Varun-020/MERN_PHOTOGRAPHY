const formidable = require("formidable");
const fs = require('fs');
const {v4:uuidv4} = require('uuid');
const Image = require('../models/image');
const Offer = require('../models/offer');

module.exports.uploadImage =(req,res)=>{
    const form = formidable({ multiples: true });
    
    form.parse(req,async(error,fields,files)=>{
       const errors=[];
       if(Object.keys(files).length === 0){
           errors.push({msg:'Select Image to continue'})
       }
       else{
           const {type} = files.images.type;          
           const split = files.images.type.split('/');          
           const extension = split[1].toLowerCase();          
           if(extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png' ){
               errors.push({msg:`${extension} is not a valid extension`});
           }else{
               files.images.name = uuidv4() + '.' + extension;
               
           }
       }
       if (errors.length != 0){
           return res.status(400).json({errors});
       }else{

        const newPath = __dirname + `/../client/build/images/${files.images.name}`;
        fs.copyFile(files.images.path,newPath, async(error)=>{
            if(!error){
                try {
                    const response = await Image.create({
                        image:files.images.name,
                    });
                    return res.status(200).json({msg:'Offer uploaded successfully',response})
                } catch (error) {
                    return res.status(500).json({errors:error,msg:error.msg});

                }
            }
        });
       }
   })
};
module.exports.uploadOffer =(req,res)=>{
    const form = formidable({ multiples: true });
    
    form.parse(req,async(error,fields,files)=>{
       const errors=[];
       if(Object.keys(files).length === 0){
           errors.push({msg:'Select Image to continue'})
       }
       else{
           const {type} = files.images.type;          
           const split = files.images.type.split('/');          
           const extension = split[1].toLowerCase();          
           if(extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png' ){
               errors.push({msg:`${extension} is not a valid extension`});
           }else{
               files.images.name = uuidv4() + '.' + extension;
               
           }
       }
       if (errors.length != 0){
           return res.status(400).json({errors});
       }else{

        const newPath = __dirname + `/../client/build/images/offer/${files.images.name}`;
        fs.copyFile(files.images.path,newPath, async(error)=>{
            if(!error){
                try {
                    const response = await Offer.create({
                        name:files.images.name,
                    });
                    return res.status(200).json({msg:'Image uploaded successfully',response})
                } catch (error) {
                    return res.status(500).json({errors:error,msg:error.msg});

                }
            }
        });
       }
   })
};