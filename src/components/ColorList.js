import React from "react";
function ColorItem(props) {
  return <li style={{ color: props.color }}>{props.color}</li>;
}
function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
const colorItem =colors.map((color)=>{
  return <ColorItem key={color} color={color}>{color}</ColorItem>
}
)
  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorItem}
      </ol>
    </div>
  );
}

export default ColorList;
