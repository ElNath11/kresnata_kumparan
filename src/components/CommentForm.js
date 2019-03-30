import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class commentForm extends Component {
constructor(props){
	super(props)

		this.state = {
				
				name: '',
				email: '',
				body: ''
		}
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post(`https://jsonplaceholder.typicode.com/posts/1/comments`, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}


	render() {
		const { name, email, body} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
		<div className="row my-2">
			  <div className="col-lg-4">
			    <div className="input-group">
			      <label>Name:</label>
						<input className="form-control" type="text" name="name" value={name} onChange={this.changeHandler}/>
			    </div>
			  </div>
			  <div className="col-lg-4">
			    <div className="input-group">
			      <label>email:</label>
						<input className="form-control" type="text" name="email" value={email} onChange={this.changeHandler}/>				
			    </div>
			  </div>

			  <div className="col-lg-4">
			    <div className="input-group">
			      <label>Body:</label>
						<input className="form-control" type="text" name="body" value={body} onChange={this.changeHandler}/>				
			      <span className="input-group-btn">
			        <button type="submit" className="btn btn-primary">Add</button>
			      </span>
			    </div>
			  </div>

			</div>
			</form>
		);
	}
}
export default commentForm;