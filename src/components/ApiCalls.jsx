import axios from "axios";
import React, { useState, useEffect } from "react";

function ApiCalls() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setUsers(response.data);
				// console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{users.map((item) => {
				return (
					<div key={item.id}>
						<h1>title:{item.name}</h1>
						<h1>body:{item.website}</h1>
					</div>
				);
			})}
		</div>
	);
}

export default ApiCalls;
