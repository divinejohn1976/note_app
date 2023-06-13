import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

import { useState } from "react";

function App() {
	const [list, setList] = useState(JSON.parse(localStorage.getItem("notes list")) || []);
	const [newTitle, setNewTitle] = useState("");
	const [newContent, setNewContent] = useState("");
	const [search, setSearch] = useState("");

	const handleAdd = () => {
		if (newTitle.length && newContent.length) {
			const id = list.length ? list[list.length - 1] : 1;
			const newItem = { id, title: newTitle, content: newContent };

			const newList = [...list, newItem];
			setList(newList);
			localStorage.setItem("notes list", JSON.stringify(newList));
			setNewTitle("");
			setNewContent("");
		}
		return;
	};

	const handleDelete = (id) => {
		const del = confirm("Are you sure you want to delete?\n");
		if (del) {
			const newList = list.filter((item) => item.id != id);

			for (let id = 1, i = 0; i > newList.length; id++, i++) {
				newList[i].id = id;
			}

			setList(newList);
			localStorage.setItem("notes list", JSON.stringify(newList));
		} else {
			return;
		}
	};

	return (
		<div className="App">
			<Header
				list={list}
				setList={setList}
				newTitle={newTitle}
				setNewTitle={setNewTitle}
				newContent={newContent}
				setNewContent={setNewContent}
				handleAdd={handleAdd}
				search={search}
				setSearch={setSearch}
			/>
			<Content
				list={list}
				search={search}
				handleDelete={handleDelete}
			/>
			<Footer />
		</div>
	);
}

export default App;
