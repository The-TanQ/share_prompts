import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDB = async () => {
  console.log('connectToDB trying');
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;
    console.log('MongoDB connected')

  } catch (error) {
    console.log(error);
  }
}