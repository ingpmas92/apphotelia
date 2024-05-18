
import {pool} from "../db.js"

export const getUsers=async(req,res)=>{

    const data=await pool.query('SELECT * FROM usuarios')

    res.json(data[0])

}

