import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
// import bottle from './images/bottle.jpg';
const App = () => {
	return (
		<Container maxwidth='large'>
			<AppBar position='static' color='inherit'>
				<Typography varient='h2' align='center'>
					Messages
				</Typography>
				{/* <img src={bottle} alt='message in a bottle' height='66' /> */}
			</AppBar>
			<Grow in>
				<Container>
					<Grid container justify='space-between' alignItems='stretch'>
						<Grid items xs={12} sm={7}>
							{/* <Posts /> */}
						</Grid>
						<Grid items xs={12} sm={4}>
							{/* <Form /> */}
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
