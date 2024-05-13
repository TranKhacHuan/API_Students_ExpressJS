import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("GET students API")
})
router.get('/:id',(req,res)=>{
    res.send("Get students by id : " + req?.params?.id ?? "")
})
router.post('/insert',(req,res)=>{
    res.send('Add students')
})
router.patch('/',(req,res)=>{
    res.send('Add students if not exists')
})

export default router