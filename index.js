import express from "express";

const app=express()

app.get('/user',(req,res)=>res.send('accediendo a users'))
app.post('/user',(req,res)=>res.send('creando un user'))
app.put('/user',(req,res)=>res.send('actualizando un user'))
app.delete('/user',(req,res)=>res.send('borrando un user'))

app.listen(3000)

console.log("Escuchando por el puerto")