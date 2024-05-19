// src/components/ComponentPanel.js
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";

const components = [
	{ id: "resistor", label: "Resistor" },
	{ id: "led", label: "LED" },
	{ id: "button", label: "Button" },
	// Add more components as needed
];

function ComponentPanel() {
	return (
		<div className="component-panel">
			<h3>Components</h3>
			{components.map(component => (
				<ComponentItem key={component.id} component={component} />
			))}
		</div>
	);
}

function ComponentItem({ component }) {
	const [, drag] = useDrag(() => ({
		type: ItemTypes.COMPONENT,
		item: { id: component.id },
	}));

	return (
		<div ref={drag} className="component-item">
			{component.label}
		</div>
	);
}

export default ComponentPanel;
