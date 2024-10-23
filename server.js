import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'



// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req,res)=>{
    res.send("Api Working")
})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://sathsarasithumgms:sathsarasithum1999@cluster0.jzbho.mongodb.net/?
// mongodb+srv://sathsarasithumgms:sathsarasithum1999@cluster0.jzbho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0