import React from "react";
import { useRef } from "react";

const Header = ({
	newTitle,
	setNewTitle,
	newContent,
	setNewContent,
	handleAdd,
	search,
	setSearch
}) => {
	const btnRef = useRef();
	setTimeout(() => {
		newTitle && newContent ? (btnRef.current.disabled = false) : (btnRef.current.disabled = true);
	}, 1);

	return (
		<header>
			<h1>My Notes</h1>
			<p className="add">
				<input
					type="text"
					placeholder="Title"
					className="newTitle"
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
				<textarea
					name="newContent"
					className="newContent"
					placeholder="Content"
					value={newContent}
					onChange={(e) => setNewContent(e.target.value)}
				></textarea>
				<button
					className="addBtn"
					ref={btnRef}
					onClick={handleAdd}
				>
					Add
				</button>
			</p>
			<label
				htmlFor="searchNote"
				className="offset"
			>
				Search-bar
			</label>
			<input
				type="search"
				id="searchNote"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</header>
	);
};

export default Header;
