import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

// MongoDB Atlas Connection with Database Name
const mongoURI = "mongodb+srv://Alenas:Hatakekakashi1@cluster0.xmymd.mongodb.net/memoriesDB?retryWrites=true&w=majority";

// Ensure strictQuery is set before connection
mongoose.set('strictQuery', false);

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define Mongoose Schema and Model
const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Post = mongoose.model('Post', postSchema);

// Routes
app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
