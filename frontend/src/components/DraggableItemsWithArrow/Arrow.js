import React from 'react';
import './Arrow.css';

const Arrow = ({ getItemOffset }) => {
  const item1Offset = getItemOffset('item-1');
  const item2Offset = getItemOffset('item-2');

  // Calculate the starting and ending points of the arrow
  const startX = item1Offset.left + item1Offset.width;
  const startY = item1Offset.top + item1Offset.height / 2;

  const endX = item2Offset.left;
  const endY = item2Offset.top + item2Offset.height / 2;

  // Determine the intermediate point for the right-angle
  const breakX = startX;
  const breakY = endY;

  // Radius for the rounded corners
  const radius = 10; // Adjust this for more or less curve

  // Create path data for L-shaped arrow with rounded corners
  const pathData = `
    M ${startX} ${startY}
    C ${startX + radius} ${startY} ${startX + radius} ${startY - radius} ${breakX} ${startY - radius}
    L ${breakX} ${breakY + radius}
    C ${breakX} ${breakY + radius} ${breakX - radius} ${breakY + radius} ${breakX - radius} ${breakY}
    L ${endX} ${breakY}
  `;

  return (
    <svg
      className="arrow-svg"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <path
        d={pathData}
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default Arrow;
