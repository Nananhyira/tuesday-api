import React, { Component } from "react";

class ClassApi extends Component {
	constructor(props) {
		super();
		this.state = { name: "ama" };
	}

	componentDidMount() {
		console.log("componentDidMount");
	}
  
	render() {
		return (
			<div>
				<h1>hello {this.state.name}</h1>
			</div>
		);
	}
}

export default ClassApi;
