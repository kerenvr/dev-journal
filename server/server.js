//server/server.js
import express from 'express';
import { db } from '../src/db/index.js';
import { postsTable } from '../src/db/schema.js'; // Ensure this points to where your schema is defined
import emailRoutes from './emailRoute.js'; // Import your email routes
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Existing post routes
app.post('/posts/create', async (req, res) => {
  const { title, content, author, author_id, slug } = req.body;

  try {
    const newPost = await db.insert(postsTable).values({
      title,
      content,
      author,
      author_id,
      slug,
    }).returning();

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error inserting post:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.get('/posts/entries', async (req, res) => {
    try {
        const posts = await db.select().from(postsTable); // Fetch all posts from the postsTable
        res.status(200).json(posts); // Send the posts as a JSON response
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Add the email routes under the '/api' prefix
app.use('/api', emailRoutes); // Now you can call /api/send-email

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});