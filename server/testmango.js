import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://Alenas:Hatakekakashi1@cluster0.xmymd.mongodb.net/memoriesDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch((err) => console.error('MongoDB connection error:', err));
