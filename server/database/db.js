import mongoose from "mongoose";



export const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@student-data.fuv6otp.mongodb.net/?retryWrites=true&w=majority&appName=Student-Data`;
    // `mongodb+srv://${username}:${password}@student-data.fuv6otp.mongodb.net/?retryWrites=true&w=majority&appName=Student-Data`;
   
    try{
     await mongoose.connect(URL, {});
     console.log('Database connected Succefully')
    }catch (error) {
        console.log("Error while connecting with the database",error.message);
    }
}

export default Connection;