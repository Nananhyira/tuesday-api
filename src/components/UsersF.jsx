import React, { useState, useEffect } from "react";

function UsersF() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
			response.json().then((data) => {
				setUsers(data);
				console.log(data);
			});
		});
	}, []);
	return (
		<div>
			<h1>UsersF</h1>
			{users.map((item) => {
				return (
					<div key={item.id}>
						<h1>title:{item.title}</h1>
						<h1>body:{item.body}</h1>
					</div>
				);
			})}
		</div>
	);
}

export default UsersF;
