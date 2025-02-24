import mongoose from "mongoose"

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://HarryJoshi:Harry0000@cluster0.m5nsv.mongodb.net/food_delivery').then(()=>console.log("DB connected"));
}
