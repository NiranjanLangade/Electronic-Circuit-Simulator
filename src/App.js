// src/App.js
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ComponentPanel from "./components/ComponentPanel";
import Playground from "./components/Playground";
import CodeEditor from "./components/CodeEditor";
import "./App.css";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="app">
				<ComponentPanel />
				<Playground />
				<CodeEditor />
			</div>
		</DndProvider>
	);
}

export default App;
