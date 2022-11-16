const express = require ("express")
const employee = require("./../models/employee")

const router = express.Router();

//here i create our route

router.post("/employee",async (req,res)=>{
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"Employee is not register...."
        })
    }else{
        res.json({
            status:"SUCCESS",
            message:"Employee is registered....",
            data:result
        })
    }
})

//get records
router.get("/employee",async(req,res) =>{
    try{
        const result = await employee.find()
        if (!result){
            res.json({
                status:"FAILED",
                message:"Not found record"
            })
        }   else {
            res.json({
                status:"SUCCESS",
                message:"Records Found",
                data:result
            })
           
        }
            
    }catch(e){
        console.log(e)
    }
})
//get single records
router.get("/employee/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const result = await employee.findById(_id);

        if (!result){
            res.json({
                status:"FAILED",
                message:"Records not found on this ID"
            })
        }   else {
            res.json({
                status:"SUCCESS",
                message:"Record Found",
                data:result
            })
           
        }

    }catch(e){
        console.log(e)
    }
})
//update records
router.put("/employee/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await employee.findByIdAndUpdate(_id,req.body,{new: true});

        if (!result){
            res.json({
                status:"FAILED",
                message:"Records not is updated ",
                data:result
            })
        }   else {
            res.json({
                status:"SUCCESS",
                message:"Records  updated",
                data:result
            })
            
        }

    }catch(e){
        console.log(e)
    }
})
//delete records
router.delete("/employee/:id",async (req,res)=>{
    try{
        const _id = req.params.id;
        const result = await employee.findByIdAndDelete(_id);

        if (!result){
            res.json({
                status:"FAILED",
                message:"Records not found on this ID"
            })
        }   else {
            res.json({
                status:"SUCCESS",
                message:"Record Found",
                data:result
            })
           
        }

    }catch(e){
        console.log(e)
    }
})

module.exports = router