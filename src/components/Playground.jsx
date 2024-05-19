// src/components/Playground.js
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import "@wokwi/elements";

function Playground() {
	const [components, setComponents] = useState([]);

	const [, drop] = useDrop({
		accept: ItemTypes.COMPONENT,
		drop: item => {
			setComponents(prevComponents => [...prevComponents, item.id]);
		},
	});

	const renderComponent = component => {
		switch (component) {
			case "resistor":
				return <wokwi-resistor />;
			case "led":
				return <wokwi-led />;
			case "button":
				return <wokwi-pushbutton />;
			default:
				return null;
		}
	};

	return (
		<div ref={drop} className="playground">
			<h3>Playground</h3>
			<div className="playground-area">
				{components.map((component, index) => (
					<div key={index} className="playground-component">
						{renderComponent(component)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Playground;
