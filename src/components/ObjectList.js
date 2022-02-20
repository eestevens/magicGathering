import React from "react";
import PropTypes from "prop-types";

// import the Contact component
import ObjectItem from "./ObjectItem";

function ObjectList(props) {
  if(props.objectItems.length === 0) {
    return (
      <div>
      <span>No data found. </span><br/>
      </div>
    );
  }
  return (
    <div>{props.objectItems.map(c => <ObjectItem key={c.id}
      name={c.name} type={c.type} rarity={c.rarity}
      creatureText={c.creatureText} color={c.color} image={c.image}
      toughness={c.toughness} power={c.power} flavor={c.flavor} setName={c.setName}/>)}</div>
  );
}

ObjectList.propTypes = {
  objectItems: PropTypes.array.isRequired
};

export default ObjectList;
