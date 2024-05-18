import {Router} from "express";
import { pool } from "../db.js";


const router=Router()

router.get('/ping',async(req,res)=>{

    const data=await pool.query('SELECT 1+1 AS result')

    res.json(data[0])

})

export default router