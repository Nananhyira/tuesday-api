import React, { Component } from "react";

class UserC extends Component {
	constructor(props) {
		super(props);
		this.state = { users: ["helllo"] };
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				res.json().then((data) => {
					this.setState({ users: data });
					console.log(data);
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<>
				{this.state.users.map((user, index) => {
					return (
						<div key={index}>
							<h1> Name:{user.name}</h1>
							<h2> website:{user.website}</h2>
							<h2>email:{user.email}</h2>
							<hr />
						</div>
					);
				})}
			</>
		);
	}
}
export default UserC;
