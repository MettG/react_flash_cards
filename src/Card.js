import React from 'react';
import FlashCardForm from './FlashCardForm';
import { Container, Header, Card, Divider, Button } from 'semantic-ui-react';

class FlashCard extends React.Component {
	state ={id: this.props.id, name: this.props.name, 
		info: this.props.info, hidden: this.props.hidden, flagged: this.props.flagged, editing: false
	};

	setEdit =() => {
		this.setState({editing: !this.state.editing});
	}

	render() {
		return(
			<Card>
				<Card.Header>
					<Button inverted color="red" 
						onClick={()=>{this.props.delete(this.state)}}
					>Delete</Button>
					<Button inverted color="orange" floated="right" 
						onClick={()=>{this.setEdit()}}
					>Edit</Button>
				</Card.Header>
				{/* <Divider hidden/> */}
				<Card.Content>
					{ this.state.editing?
						<FlashCardForm add={this.props.edit} 
							type="Save" id={this.state.id} name={this.state.name}
							info={this.state.info}
							hide={this.setEdit}
						/>
						: 
						<Header 
							as="h3" 
							textAlign="center" 
							onClick={()=> {this.props.hide(this.state.id)}}
						>
						{this.props.hidden ? this.props.name : this.props.info}
						</Header>
					}
				</Card.Content>
				<Divider hidden/>
			</Card>
		);
	}

};

export default FlashCard;