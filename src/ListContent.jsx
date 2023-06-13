import React from "react";

const ListContent = ({ item, handleDelete }) => {
	return (
		<div className="item">
			<h2>{item.title}</h2>
			{/* <p className="lilContent">{item.content.substr(0, 4) + "..."}</p> */}
			<details>
				<summary>
					{item.content.split(" ").length > 1
						? item.content.split(" ")[0] + "..."
						: item.content.substr(0)}
					{/* {item.content.length > 25 ? item.content.substr(0, 25) + "..." : item.content} */}
				</summary>
				<p className="content">{item.content}</p>
				<br />
				<br />
				<button
					className="deleteBtn"
					onClick={() => handleDelete(item.id)}
				>
					Delete
				</button>
			</details>
		</div>
	);
};

export default ListContent;
