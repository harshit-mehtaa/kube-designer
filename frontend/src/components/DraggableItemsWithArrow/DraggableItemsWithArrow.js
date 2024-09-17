import React, { useState, useRef } from 'react';
import DraggableItem from './DraggableItem';
import Arrow from './Arrow';
import './DraggableItemsWithArrow.css';

const DraggableItemsWithArrow = () => {
  const initialItems = [
    { id: 'item-1', content: 'Item 1', x: 50, y: 50 },
    { id: 'item-2', content: 'Item 2', x: 200, y: 200 },
  ];

  const [items, setItems] = useState(initialItems);
  const itemRefs = useRef({});

  const getItemOffset = (itemId) => {
    const itemElement = itemRefs.current[itemId];
    if (itemElement) {
      const rect = itemElement.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    }
    return { left: 0, top: 0, width: 0, height: 0 };
  };

  return (
    <div className="canvas">
      {items.map((item) => (
        <DraggableItem
          key={item.id}
          item={item}
          itemRefs={itemRefs}
          setItems={setItems}
          items={items}
        />
      ))}
      <Arrow getItemOffset={getItemOffset} />
    </div>
  );
};

export default DraggableItemsWithArrow;
