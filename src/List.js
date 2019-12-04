import React from 'react';
import FlashCard from './Card';
import { Container, Divider, Card } from 'semantic-ui-react';

const CardList = (props) => {
	return (
		<Container>
			<Divider />
			<Card.Group centered itemsPerRow={2}>
				{ props.cards.map( 
					card => 
					<FlashCard 
						key={card.id} {...card} hide={props.hide} 
						delete={props.delete} edit={props.edit}
						flag={props.flag}
					/>
					)}
			</Card.Group>
		</Container>
	);
};

export default CardList;