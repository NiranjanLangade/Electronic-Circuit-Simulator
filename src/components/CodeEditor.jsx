// src/components/CodeEditor.js
import React from "react";
import MonacoEditor from "react-monaco-editor";

function CodeEditor() {
	const code = `void setup() {
    // put your setup code here, to run once:
  }

  void loop() {
    // put your main code here, to run repeatedly:
  }`;

	return (
		<div className="code-editor">
			<h3>Arduino Code</h3>
			<MonacoEditor
				width="100%"
				height="90%"
				language="cpp"
				theme="vs-dark"
				value={code}
			/>
		</div>
	);
}

export default CodeEditor;
