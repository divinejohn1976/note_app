import React from "react";
import ListContent from "./ListContent";

const Content = ({ list, handleDelete, search }) => {
	const searchedList = list.filter(
		(item) =>
			item.content.toLowerCase().includes(search.toLowerCase()) ||
			item.title.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<main>
			<section className="noteContainer">
				{searchedList.map((item) => (
					<div
						key={item.id}
						className="bgchange"
					>
						<ListContent
							item={item}
							handleDelete={handleDelete}
						/>
					</div>
				))}
			</section>
		</main>
	);
};

export default Content;
