import mongoose from 'mongoose';
import Post from './postModel.js';

mongoose.connect('your_mongodb_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true });

process.on('message', async (id) => {
  try {
    await Post.findByIdAndDelete(id);
    process.send({ message: 'Post deleted successfully' });
  } catch (error) {
    process.send({ message: error.message });
  }
});
