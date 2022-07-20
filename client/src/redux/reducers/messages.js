const reducer = (messages = [], action) => {
	switch (action.type) {
		case 'FETCH_ALL':
			return action.payload;
		case 'CREATE':
			return [...messages, action.payload];
		default:
			return messages;
	}
};
export default reducer;
