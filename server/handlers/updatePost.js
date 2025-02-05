import mongoose from 'mongoose';
import Post from './postModel.js';

mongoose.connect('your_mongodb_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true });

process.on('message', async ({ id, updatedPost }) => {
  try {
    const post = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
    process.send(post);
  } catch (error) {
    process.send({ message: error.message });
  }
});
