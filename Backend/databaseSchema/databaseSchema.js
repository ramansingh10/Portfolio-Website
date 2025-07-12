import mongoose, { mongo } from "mongoose";
import validator from 'validator'

const detailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3, 'Minimum length should be grater than 3']
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,'Provide a valid email'],
        minLength:[13, 'Provide a valid email']
    },
    subject:{
        type:String,
        required:true,
        maxLength:[50, 'Subject is more then 50 character']
    },
    message:{
        type:String,
        required:true,
        maxLength:[200, 'Message is too long']
    }
})

export const details= mongoose.model('details', detailsSchema)