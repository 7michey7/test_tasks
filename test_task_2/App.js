import React from "react";

import VirtualizedList from "./components/VirtualizedList";

export default function App() {
	const virtualizedListItems = [...Array(300000).keys()].map((i) => i + 1);

	return (
		<VirtualizedList
			items={virtualizedListItems}
			containerHeight={240}
			width={100}
			itemHeight={60}
		/>
	);
}
