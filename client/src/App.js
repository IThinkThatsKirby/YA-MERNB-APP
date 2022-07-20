import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
// Components go here
import { getMessages } from './redux/actions/messages';
import Messages from './components/Message/Messages';
import Form from './components/Form/Form';
import bottle from './images/bottle-1694868.jpg';

const getDesignTokens = (mode) => ({
	palette: {
		mode,
		primary: {
			...(mode === 'dark' && {
				main: '#00FF99',
			}),
		},
	},
	spacing: 11,
	shape: {
		borderRadius: 14,
	},
});
const App = () => {
	const Dispatch = useDispatch();

	useEffect(() => {
		Dispatch(getMessages());
	}, [Dispatch]);
	const darkModeTheme = createTheme(getDesignTokens('dark'));
	return (
		<ThemeProvider theme={darkModeTheme}>
			<CssBaseline />
			<Container maxwidth='large'>
				<AppBar position='static' color='inherit'>
					<Typography varient='h2' align='center'>
						Messages
					</Typography>
					<img src={bottle} alt='message in a bottle' />
				</AppBar>
				<Grow in>
					<Container>
						<Grid container justify='space-between' alignItems='stretch'>
							<Grid>
								<Messages />
							</Grid>
							<Grid>
								<Form />
							</Grid>
						</Grid>
					</Container>
				</Grow>
			</Container>
		</ThemeProvider>
	);
};

export default App;
