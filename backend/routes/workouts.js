const express  = require('express')
const router = express.Router()



//get all workouts
router.get('/', (req , res)=>{
    res.json({msg:"get all workouts"})
    })
    
    //get single workout
    router.get('/:id', (req , res)=>{
        res.json({msg:"get single workout"})
        })
    
    //get single workout
    router.post('/:id', (req , res)=>{
        res.json({msg:"create single workout"})
        })
    
        //get single workout
        router.delete('/:id', (req , res)=>{
        res.json({msg:"delete single workout"})
        })
    
           //get single workout
           router.patch('/:id', (req , res)=>{
        res.json({msg:"update single workout"})
        })

        module.exports = router