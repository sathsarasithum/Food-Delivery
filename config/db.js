import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sathsarasithumgms:sathsarasithum1999@cluster0.jzbho.mongodb.net/food-del?').then(()=>console.log("DB Connected"));
}