const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username')
      .populate('comments.user', 'username')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) { res.status(500).send('Server Error') }
});

// POST a new post
router.post('/', auth, async (req, res) => {
  try {
    const newPost = new Post({
      content: req.body.content,
      author: req.user.id
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) { res.status(500).send('Server Error') }
});

// PUT to like/unlike a post
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(req.user.id)) {
      // Unlike
      post.likes.pull(req.user.id);
    } else {
      // Like
      post.likes.push(req.user.id);
    }
    await post.save();
    res.json(post.likes);
  } catch (err) { res.status(500).send('Server Error') }
});

// POST a comment
router.post('/comment/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const newComment = {
      user: req.user.id,
      text: req.body.text
    };
    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);
  } catch (err) { res.status(500).send('Server Error') }
});

module.exports = router;
