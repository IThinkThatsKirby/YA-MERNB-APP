import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createMessage } from '../../redux/actions/messages';
import FileBase from 'react-file-base64';

const Form = () => {
	const [messageData, setMessageData] = useState({
		creator: '',
		title: '',
		message: '',
		tags: '',
		selectedFiles: '',
	});
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createMessage(messageData));
	};
	const clear = () => {
		setMessageData({
			creator: '',
			title: '',
			message: '',
			tags: '',
			selectedFile: '',
		});
	};
	return (
		<Paper align='center'>
			<form autoComplete='off' noValidate onSubmit={handleSubmit}>
				<Typography variant='h6'>Creating a bottle</Typography>
				<TextField
					name='creator'
					variant='outlined'
					label='Creator'
					fullWidth
					value={messageData.creator}
					onChange={(e) =>
						setMessageData({ ...messageData, creator: e.target.value })
					}
				/>
				<TextField
					name='title'
					variant='outlined'
					label='Title'
					fullWidth
					value={messageData.title}
					onChange={(e) =>
						setMessageData({ ...messageData, title: e.target.value })
					}
				/>
				<TextField
					name='message'
					variant='outlined'
					label='Message'
					fullWidth
					value={messageData.message}
					onChange={(e) =>
						setMessageData({ ...messageData, message: e.target.value })
					}
				/>{' '}
				<TextField
					name='tags'
					variant='outlined'
					label='Tages'
					fullWidth
					value={messageData.tags}
					onChange={(e) =>
						setMessageData({ ...messageData, tags: e.target.value })
					}
				/>{' '}
				<div>
					<FileBase
						type='file'
						multiple={false}
						onDone={({ base64 }) =>
							setMessageData({ ...messageData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					variant='contained'
					color='primary'
					size='large'
					type='submit'
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant='contained'
					color='secondary'
					size='small'
					type='submit'
					onClick={clear}
					fullWidth
				>
					clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
