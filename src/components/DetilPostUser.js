import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PostForm from './PostForm.js';

class detilPostUser extends Component {

		state = {
		posts: []
	}

		componentDidMount(){

		const { match: { params } } = this.props;

		axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
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
		<h2 className="center">Detil List Posts</h2>
		<PostForm />
		{/*  List posting tiap user */}
			{this.state.posts.map(postingan =>
			<div className="card card-body text-left mb-2">
				<h3>{postingan.title}</h3>
				<p>{postingan.body}</p>
				<Link to={`/detilPostComment/${postingan.id}`} class="btn btn-dark">View Comment</Link>		
			</div>
		)}		

		</div>
	</div>

		);
	}
}
export default detilPostUser;