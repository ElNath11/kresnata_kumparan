import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class postUser extends Component {

	state = {
		posts: []
	}

	componentDidMount(){
		axios.get("http://jsonplaceholder.typicode.com/posts")
		.then(res => {
			console.log(res.data)
			this.setState({
				posts: res.data
			})
		})
	}

	render() {
		return (
		<div>
			<div className="col px2">
			<h2 className="center">List All Posts</h2>			
			{/* {this.state.posts.map(post => <div>{post.name}</div>)} */}

	{/*  List post */}
			{this.state.posts.map(post =>
			<div className="card card-body text-left mb-2">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		)}
			</div>
		</div>
		);
	}
}
export default postUser;