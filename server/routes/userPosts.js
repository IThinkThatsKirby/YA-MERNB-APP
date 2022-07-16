import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

// lets make some routes
const router = express.Router();

//express routeing logic as /posts ex.'https:PORT/posts';
router.get('/', getPosts); // executes function get req@/posts
router.post('/', createPost);
//export the routes
export default router;
