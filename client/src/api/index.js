//logic for requests to backend go here
import axios from 'axios';
const url = 'http://localhost:5000/posts';

export const fetchMessages = () => axios.get(url);
export const createMessage = (newMessage) => axios.post(url, newMessage);
