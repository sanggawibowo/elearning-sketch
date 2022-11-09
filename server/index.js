import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()
// Routes

//Mongoose
const connect = () =>{
  mongoose
  .connect(process.env.DB)
  .then(()=> {
    console.log("Connected to DB")
  })
  .catch((err)=> {
    throw err
  })
}
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

const port = 5005
connect()

app.listen(port, console.log(`Connected to Port ${port}`))


