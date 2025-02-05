import mongoose from 'mongoose';
import Post from './postModel.js';

mongoose.connect('your_mongodb_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true });

process.on('message', async () => {
  try {
    const posts = await Post.find();
    process.send(posts);
  } catch (error) {
    process.send({ message: error.message });
  }
});
