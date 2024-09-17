import React, { useRef } from 'react';
import { DraggableCore } from 'react-draggable';
import './DraggableItem.css';

const DraggableItem = ({ item, itemRefs, setItems, items }) => {
  const itemRef = useRef(null);

  itemRefs.current[item.id] = itemRef.current;

  const handleDrag = (e, data) => {
    setItems(items.map(i =>
      i.id === item.id ? { ...i, x: i.x + data.deltaX, y: i.y + data.deltaY } : i
    ));
  };

  return (
    <DraggableCore onDrag={handleDrag}>
      <div
        ref={itemRef}
        className="draggable-item"
        style={{ left: item.x, top: item.y }}
      >
        {item.content}
      </div>
    </DraggableCore>
  );
};

export default DraggableItem;
