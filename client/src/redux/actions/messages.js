import * as api from '../../api';
//Action creators function creators.
// use async dispatch function to async await in redux with thunk
export const getMessages = () => async (dispatch) => {
	try {
		const { data } = await api.fetchMessages();
		dispatch({ type: 'FETCH_ALL', payload: data });
	} catch (err) {
		console.log(err.message);
	}
};

export const createMessage = (message) => async (dispatch) => {
	try {
		const { data } = await api.createMessage(message);

		dispatch({ type: 'CREATE', payload: data });
	} catch (err) {
		console.log(err.message);
	}
};
