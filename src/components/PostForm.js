import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class postInput extends Component {
constructor(props){
	super(props)

		this.state = {
				
				title: '',
				body: ''			
		}
	}

	changeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post(`https://jsonplaceholder.typicode.com/posts`, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})

	}


	render() {
		const { title, body} = this.state
		return (
			<form onSubmit={this.handleSubmit}>
		<div className="row my-2">
			  <div className="col-lg-6">
			    <div className="input-group">
			      <label>Title:</label>
						<input className="form-control" type="text" name="title" value={title} onChange={this.changeHandler}/>
			    </div>
			  </div>
			  <div className="col-lg-6">
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
export default postInput;