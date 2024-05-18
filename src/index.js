import express from "express";
import routeruser from "./routes/user.routes.js";
import routerindex from "./routes/index.routes.js";

const app=express()

app.use(routeruser)
app.use(routerindex)

app.listen(3000)
console.log("Escuchando por el puerto")