import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AlbumUser extends Component {

	state = {
		detilPhoto: []
	}

	componentDidMount(){

		const { match: { params } } = this.props;

		axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${params.photoId}`)
		.then(res => {
			console.log(res.data)
			this.setState({
				detilPhoto: res.data
			})
		})
	}

	render() {
		return (

		<div>
			<div className="col px2">
			<h2 className="center">Detail Photo Album</h2>		

		{/*  List posting tiap user */}
		<div className="row mt-2 px2">

		{this.state.detilPhoto.map(data =>
				<div className="card col-12 p2">
				  <img src={data.url} className="card-img-top" alt="image" />
				  <div className="card-body">
				    <h5 className="card-title">{data.title}</h5>				    
				  </div>
				</div>
		)}
		
				</div>
			</div>
		</div>

		);
	}
}
export default AlbumUser;