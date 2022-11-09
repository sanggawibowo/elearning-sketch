import mongoose from 'mongoose'
import User from '../models/Users.js'
import bcrypt from 'bcryptjs'
import { createError } from '../error.js'
import jwt from "jsonwebtoken"

export const signup = async (req, res, next)=>{
  try {
    console.log(req.body)
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(req.body.password, salt)
    const newUser = new User({...req.body, password: hash})
    
    await newUser.save()
    res.status(200).send("User succesfully created")
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export const signin = async (req,res,next)=> {
  try {
    
    const user = await User.findOne({email: req.body.email})
    console.log(user)
    if (!user) return next(createError(400, "Username not found"))
    
    const isCorrect = await bcrypt.compare(req.body.password, user.password)
    if (!isCorrect) return next(createError(400, "Username or password incorrect"))

    const token = jwt.sign({id: user._id}, process.env.JWT)
    const { password, ...others} = user._doc

    res.cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(others)
    console.log(res.cookie)
  } catch (error) {
    next(error)
  }
}

export const googleAuth = async (req, res, next)=> {
  try { 
    const user = await User.findOne({email: req.body.email})
    if (user){
      const token = jwt.sign({id: user._id}, process.env.JWT)
      res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(user._doc);
    } else {
      const newUser = new User ({
        ...req.body, 
        fromGoogle: true,
      })
    }
    const savedUser = await newUser.save();
    const token = jwt.sign ({id: savedUser._id}, process.env.JWT)
    res 
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(savedUser._doc);
  } catch (err){
    next(err)
  }
}