import React from 'react';
import FlashCards from './FlashCards';
import { Header, Divider } from 'semantic-ui-react';

const Home = () => (
	<>
		<Header textAlign="center">Home</Header>
		<Divider />
		<FlashCards />
	</>
);

export default Home;