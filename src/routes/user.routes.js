import { Router } from "express";
import { getUsers } from "../controler/user.controler.js";

const router=Router()

router.get('/user',getUsers)
router.post('/user',(req,res)=>res.send('creando un user'))
router.put('/user',(req,res)=>res.send('actualizando un user'))
router.delete('/user',(req,res)=>res.send('borrando un user'))

export default router