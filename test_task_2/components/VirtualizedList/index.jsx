import React, { useState } from 'react';
import { useMemo } from 'react';
import './styles.css';


const VirtualizedList=({ items=[], containerHeight=240, width=100, itemHeight=60})=>{
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};
	
	const virtualItems=useMemo(()=>{
		const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight));
		const endIndex = Math.min(
			items.length,
			Math.ceil((scrollTop + containerHeight) / itemHeight));

		const virtualItems=[];
		for(let index=startIndex; index <endIndex; index++){
			virtualItems.push(index)
		}
		return virtualItems;
		
	},[scrollTop, items.length]);

	const totalHeight = itemHeight*items.length;

	return (
		<div
			className='vitualized-list-container'
			style={{height: containerHeight, width}}
			onScroll={handleScroll}
		>
			<ul
				className='virtualized-list'
				style={{height: totalHeight}}
			>
				{
					virtualItems.map((virtualIndex)=>{
						const item=items[virtualIndex];
						return (
							<li
								key={virtualIndex}
								style={{
									height:itemHeight,
									top: `${itemHeight * virtualIndex}px`,
									backgroundColor: virtualIndex%2==0?'#e3e3e3':'none',
								}}
							>{item}
							</li>
						);
					})
				}
			</ul>
		</div>
	);
}

export default VirtualizedList;