const express = require('express');
const router = express.Router();
const {Employee , Company}= require('../configs/db')

router.get("", async(req,res)=>{
    try {
       const employee= await Employee.findAll({include:Company});
       return res.status(200).send(employee);
    } catch (error) {
       return res.status(500).send(error)
    }
    
})

router.get("/:id", async(req,res)=>{
   try {
      const employee= await Employee.findByPk(req.params.id);
      return res.status(200).send(employee);
   } catch (error) {
      return res.status(500).send(error)
   }
   
})
// post request 
router.post("", async(req,res)=>{
   try {
       const employee= await Employee.create(req.body);
       return res.status(201).send(employee);
   } catch (error) {
       return res.status(500).send(error)
   }
})



module.exports=router