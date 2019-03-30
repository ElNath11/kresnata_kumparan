import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AlbumUser extends Component {

		state = {
		albums: []
	}

		componentDidMount(){

		const { match: { params } } = this.props;

		axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`)
			.then(res => {
			console.log(res.data)
			this.setState({
				albums: res.data
			})
		})
	}

	handleDelete() {
  const { match: { params } } = this.props;

  axios.delete(`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`)
    .then(() => {
      console.log('albums deleted');
    });
}

	render() {
		return (

	<div>
		<div className="col px2">
		<h2 className="center">Detil List Albums</h2>		

		{/*  List posting tiap user */}
		<div className="row mt-2">
			{this.state.albums.map(data =>			
			<div className="col-4 text-left">
				<div className="card card-body mt-2 h-100px">
					<h3 className="card-title">{data.title}</h3>
				</div>
				<div className="card"><Link to={`/viewPhotoAlbum/${data.id}`} className="btn btn-primary">View Photo</Link></div>
			</div>		
		)}
		</div>
		</div>
	</div>

		);
	}
}
export default AlbumUser;