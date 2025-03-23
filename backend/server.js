import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";

import productRoutes from "./routes/productRoutes.js";


const app=express();
const PORT=process.env.PORT 
const __dirname=path.resolve();

app.use(express.json())
app.use(cors())
app.use(helmet({
    contentSecurityPolicy:false
}));
app.use(morgan("dev"))

app.use(async (req,res,next)=>{
    try{
        const decision = await aj.protect(req, {
            requested:1
        });

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({error:"Too many requests"})
            }
            else if(decision.reason.isBot()){
                res.status(403).json({error:"Bot detected"})
            }else{
                res.status(403).json({error:"Forbidden"})
            }
            return
        }
        if(decision.results.some((result)=>result.reason.isBot() && result.reason.isSpoofed())){
            res.status(403).json({error:"Spoofed Bot detected"})
            return
        }

        next();

    }catch(err){
        console.log("Arjet error",err)
        next(err)
    }
})

app.use("/api/products",productRoutes);

if(process.env.NODE_ENV==="production"){
    // server our react app
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })

}

 async function initDB(){
    try{
        await sql`
        CREATE TABLE IF NOT EXISTS products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `;
        console.log("Databse running")
    }catch(err){
        console.log("Error initDB",err)
    }
 }

initDB().then(()=>{
    
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})
})
