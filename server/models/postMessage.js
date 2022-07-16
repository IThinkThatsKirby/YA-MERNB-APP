import mongoose from 'mongoose';

// post hard type schematic
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	img: String,
	likeCount: {
		type: Number,
		default: 1, // you auto like your own posts && comments
	},
	disLikeCount: {
		type: Number,
		default: 0,
	},
	postCreatedAt: {
		type: Date,
		default: new Date(),
	},
});

// schema turns into model and exportable object
const PostMessage = mongoose.model('PostMessage', postSchema);

// export model for CRUD functions
export default PostMessage;
