import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<div className="col py2">
				<h1 className="center">Kresnata Kumparan</h1>
				<ul className="list-reset pop f12 caps">
					<li className="inline-block mr1">
						<Link to="/" className="text-decoration-none">
							<button type="button" className="btn btn-success">Home</button>
						</Link>
					</li>
					<li className="inline-block mr1">
						<Link to="/listUser" className="text-decoration-none">
							<button type="button" className="btn btn-info">List User</button>
						</Link>
					</li>
					{/*<li className="inline-block mr1">
						<Link to="/postUser" className="text-decoration-none">
							<button type="button" className="btn btn-info">List Post</button>
						</Link>
					</li>*/}
					{/* <li className="inline-block mr1"><Link to="/photo" className="text-decoration-none">Photo</Link></li> */} 
				</ul>
			
			</div>
			);
		}
	}
	export default Header;