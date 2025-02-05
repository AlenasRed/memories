import mongoose from 'mongoose';
import Post from './postModel.js';

mongoose.connect('your_mongodb_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true });

process.on('message', async (newPost) => {
  try {
    const post = new Post(newPost);
    await post.save();
    process.send(post);
  } catch (error) {
    process.send({ message: error.message });
  }
});
