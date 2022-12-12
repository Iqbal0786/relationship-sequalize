const express= require('express');
const router= express.Router();
const {Company,Employee,}= require('../configs/db')

// get request 
router.get("", async(req,res)=>{
     try {
        const companies= await Company.findAll({include:Employee});
        return res.status(200).send(companies);
     } catch (error) {
        return res.status(500).send(error)
     }
     
})

router.get("/:id", async(req,res)=>{
    try {
       const companies= await Company.findByPk(req.params.id);
       return res.status(200).send(companies);
    } catch (error) {
       return res.status(500).send(error)
    }
    
})
// post request 
router.post("", async(req,res)=>{
    try {
        const company= await Company.create(req.body);
        return res.status(201).send(company);
    } catch (error) {
        return res.status(500).send(error)
    }
})


module.exports= router