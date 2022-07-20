import React from 'react';
import { useSelector } from 'react-redux';

import Message from './Message';
const Messages = () => {
	const messages = useSelector((state) => state.messages);
	console.log(messages);
	return (
		<>
			<h1>messages will go here</h1>
			<Message></Message>
			<Message></Message>
		</>
	);
};
export default Messages;
