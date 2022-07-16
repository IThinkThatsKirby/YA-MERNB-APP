// import mongoose model
import PostMessage from '../models/postMessage.js';
// logic for posts routes
//get.req@/posts
export const getPosts = async (req, res) => {
	try {
		// get all post Messages
		const postMessages = await PostMessage.find();
		console.log(postMessages);

		res.status(200).json(postMessages);
	} catch (err) {
		let errMessage = err.message;
		res
			.status(404)
			.send(
				`<p>get.req@/posts ERROR MESSAGE HERE --> ${errMessage}</p><img src='https://http.cat/404'></img>"`
			); //CHANGE THIS BEFORE COMMERCIAL DEPLOYMENT
	}
};
// post.req@/posts
export const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostMessage(post);
	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (err) {
		let errMessage = err.message;
		res
			.status(400)
			.send(
				`<p>post.req@/posts ERROR MESSAGE HERE --> ${errMessage}</p><img src='https://http.cat/400'></img>"`
			); //CHANGE THIS BEFORE COMMERCIAL DEPLOYMENT
	}
};
