const mongoose =require('mongoose')

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:"shooter01",
    })
  
    console.log("connect to db");
    
}
module.exports=connectDB