import React from 'react';
import { Form, Button, Divider, Container } from 'semantic-ui-react';

class FlashCardForm extends React.Component {
	state ={id:"", name: this.props.name, info: this.props.info, hidden: false, flagged: false};

	getUniqId = () => {
		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}

	handleChange = (e) => {
		if(this.props.id === null) {
			if(e.target.name === "name")
				this.setState({id: this.getUniqId, name: e.target.value, info: this.state.info});
			if(e.target.name === "info")
				this.setState({id: this.state.id, name: this.state.name, info: e.target.value});
		} else {
			if(e.target.name === "name")
				this.setState({id: this.props.id, name: e.target.value, info: this.state.info});
			if(e.target.name === "info")
				this.setState({id: this.props.id, name: this.state.name, info: e.target.value});
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.add(this.state);
		this.setState({id:"", name:"", info: "", hidden: false, flagged: false});
		if (this.props.hide != null)
			this.props.hide();
	}

	render() {
		return (
			<Container>
				<Form onSubmit={this.handleSubmit}>
					<Form.Field>
						<label>Name</label>
						<input
							required
							placeholder = "Hint/Subject Name"
							value={this.state.name}
							name="name"
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Form.Field>
						<label>Information</label>
						<input
							required
							placeholder =  "All relevant information"
							value={this.state.info}
							name="info"
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button inverted color="green" floated="right" type="submit">{this.props.type}</Button>
				</Form>
				<br/>
				<br/>
				<Divider/>
			</Container>			
		);
	}
};

export default FlashCardForm;