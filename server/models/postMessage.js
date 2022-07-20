import mongoose from 'mongoose';
const { Schema } = mongoose;

// post hard type schematic
const postSchema = new Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	img: {
		type: String,
		default:
			'https://pixabay.com/get/g04d13ced3031d3c8ce6b1e09ce3cce7fb262ace1aa8d5e670211fe0327d791a44eb1f5755d72f29b54ffa1f2b3f65c54_640.jpg',
	},
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
