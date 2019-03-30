import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CommentForm from './CommentForm.js';

class detilPostComment extends Component {

		state = {
		comments: []
	}


	handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

		componentDidMount(){

		const { match: { params } } = this.props;

		axios.get(`http://jsonplaceholder.typicode.com/posts/1/comments?postId=${params.postId}`)
			.then(res => {
			console.log(res.data)
			this.setState({
				comments: res.data
			})
		})
	}

	render() {
		return (

	<div>
		<div className="col px2">
		<h2 className="center">Comments</h2>
		<CommentForm />
			{/* Comments */}		
			{this.state.comments.map(data =>
			<div className="col-12">
				<div className="bd-callout bd-callout-info text-left">
					<h1>{data.email}</h1>
					<p>{data.body}</p>
				</div>
			</div>
			)}
		</div>
	</div>

		);
	}
}
export default detilPostComment;