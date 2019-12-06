import React from 'react';
import FlashCardForm from './FlashCardForm';
import List from '../List';
import { Container, Header, Divider, Button } from 'semantic-ui-react';

class FlashCards extends React.Component {
	state = { showForm: true, showFlagged: false,
		cards: [
			{id:"1", name:"Components", 
			info:"Meaningful objects that help divide the project workload, they have child-parent relationships.", 
			hidden: true, flagged: true},
			{id:"2", name:"This", 
			info:"Refers to the component, if it does not, react breaks.", 
			hidden: true, flagged: false},
			{id:"3", name:"Import/Export", 
			info:"Components must be exported and then imported to their parent component's file.", 
			hidden: true, flagged: false},
		],
		flaggedCards: [
			{id:"1", name:"Components", 
			info:"Meaningful objects that help divide the project workload, they have child-parent relationships.", 
			hidden: true, flagged: true},
		]
	};

	addCard = (card) => {
		this.setState({showForm: this.state.showForm, showFlagged: this.state.showFlagged, cards: [...this.state.cards,card]});
	};
	hideCard =(id) => {
		this.setState({
			cards: this.state.cards.map( card => {
				if(card.id === id) {
					return {...card, hidden: !card.hidden};
				}
				return card;
			})
		});
	};
	flagCard=(card) => {
		const c = {flagged: !card.flagged, ...card};
		const flags = [...this.state.flaggedCards, c];
		this.setState({flaggedCards: flags})
	};
	deleteCard = (card) => {
		const cards = this.state.cards.filter((c) => {
			if(c.id !== card.id) return c;
			return null;
		});
		this.setState({showForm: this.state.showForm, showFlagged: this.state.showFlagged, cards});
	};
	editCard = (card) => {
		this.setState({
			cards: this.state.cards.map( c => {
				if(c.id === card.id)
					return {...card};
				return c;
			})
		});
	}
	hideForm= ()=> {
		this.setState({showForm: !this.state.showForm})
	};
	render() {
		return (
			<Container>
				<Header as="h1" textAlign="center">React Flash Cards</Header>
				<Divider/>
				{/* Render Flash card form*/}
				{this.state.showForm ? <FlashCardForm add={this.addCard} type="Add"/> : null }
				<Button attached="bottom" icon="arrow up" color="red"/>
				{/* Show Flagged cards or Show All Cards*/}
				{ !this.state.showFlagged ? 
					<List cards={this.state.cards} 
						hide={this.hideCard} flag={this.flagCard}
						edit={this.editCard} delete={this.deleteCard}
					/>
					:
					<List cards={this.state.flaggedCards} 
						hide={this.hideCard} flag={this.flagCard}
						edit={this.editCard} delete={this.deleteCard}
					/>
				}
			</Container>
		);
	}
}

export default FlashCards;
