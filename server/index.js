// remember to add -- { "type" : module } -- in package.json or import wont work
import 'dotenv/config'; // fancy es6 WOW :D
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// initialize the post routes route.
import postRoutes from './routes/userPosts.js';
// initialize app express instance
const app = express();
// middle wares
// specify posts routes 'https:PORT/posts'
app.use('/posts', postRoutes);
// allow size for some images
app.use(bodyParser.json({ limit: '25mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());
// mongodb connection and server port variables
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;
await mongoose // we get there when we get there
	.connect(CONNECTION_URL, {
		// The following is NOT necessary but to be SAFE
		useNewURLParser: true, //uses NEW and FANCY mongoose URL parser
		useUnifiedTopology: true, //uses NEW and FANCY mongoose Server Discover and Monitoring engine
	}) // Message for successful DB connection
	.then(() => {
		app.listen(PORT, () =>
			console.log(
				`Server is running on ${PORT}, mongoose DB CONNECTION SUCCESSFUL`
			)
		);
	}) // Message for failure ;(
	.catch((err) => {
		console.log(`CONNECTION ERROR LOOK HERE -->${err.message}`);
	});
