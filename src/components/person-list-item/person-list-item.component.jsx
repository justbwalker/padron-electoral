import React from "react";

import "./person-list-item.styles.scss";

const PersonListItem = ({ firstName, lastName, mothersLastName, gender, state, city, birthDate }) => {
  const age = 15;
  return (
    <div className="person-list-item">
      <div className="field">{firstName}</div>
      <div className="field">{lastName}</div>
      <div className="field">{mothersLastName}</div>
      <div className="field">{gender}</div>
      <div className="field">{state}</div>
      <div className="field">{city}</div>
      <div className="field">{birthDate}</div>
      <div className="field">{age}</div>
    </div>
  );
};

export default PersonListItem;
