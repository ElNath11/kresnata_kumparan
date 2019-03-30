import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ListUser extends Component {

	state = {
		users: []
	}

	componentDidMount(){
		axios.get("http://jsonplaceholder.typicode.com/users")
		.then(res => {
			console.log(res.data)
			this.setState({
				users: res.data
			})
		})
	}

	render() {
		return (
			<div>
			<div className="col px2">
			<h2 className="center">List User</h2>			
		{/* {this.state.users.map(user => <div>{user.name}</div>)} */}

	{/*  List User */}
	<table class="table">
	<thead>
	<tr>					
	<th scope="col">Name</th>
	<th scope="col">Username</th>
	<th scope="col">Company Name</th>
	<th scope="col">Action Data</th>
	</tr>
	</thead>
	<tbody>
	{this.state.users.map(user => 
		<tr>
		<td>{user.name}</td>
		<td>{user.email}</td>
		<td>{user.company.name}</td>
		<td>
			<ul className="list-group list-reset">
				<li className="list-group-item"><Link to={`/detilPostUser/${user.id}`}>Post User</Link></li>
				<li className="list-group-item"><Link to={`/AlbumUser/${user.id}`}>Album User</Link></li>
			</ul>				
		</td>

		</tr>
		)}

		</tbody>
		</table>
		</div>
		</div>
		);
	}
}
export default ListUser;