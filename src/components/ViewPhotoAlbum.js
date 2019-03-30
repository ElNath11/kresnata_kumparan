import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AlbumUser extends Component {

	state = {
		photo: []
	}

	componentDidMount(){

		const { match: { params } } = this.props;

		axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?albumId=${params.albumId}`)
		.then(res => {
			console.log(res.data)
			this.setState({
				photo: res.data
			})
		})
	}

	handleDelete() {
		const { match: { params } } = this.props;

		axios.delete(`https://jsonplaceholder.typicode.com/albums/1/photos?albumId=${params.albumId}`)
		.then(() => {
			console.log('photo deleted');
		});
	}

	render() {
		return (

		<div>
			<div className="col px2">
			<h2 className="center">Photo Album</h2>		

		{/*  List posting tiap user */}
		<div className="row mt-2 px2">

		{this.state.photo.map(data =>
				<div className="card col-4 p2">
				  <img src={data.thumbnailUrl} className="card-img-top" alt="image" />
				  <div className="card-body">
				    <h5 className="card-title">{data.title}</h5>
				    <Link to={`/detilPhoto/${data.id}`} className="btn btn-primary">Detail Photo</Link>
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