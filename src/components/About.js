import React , {Fragment} from 'react';
import { Container, Header } from 'semantic-ui-react';

const About = () => (
	<Fragment>
		<Header textAlign="center">
			About
		</Header>
		<Container text >
			<p textAlign="center">
				This website is a resource to study react with flash cards.
			</p>
		</Container>
	</Fragment>
);

export default About;