import React from "react";
import PropTypes from "prop-types";

import Button from "../button/button.component";

import "./person-list-item.styles.scss";

const PersonListItem = ({ firstName, lastName, mothersLastName, gender, state, city, birthDate }) => {
  const getAge = date => {
    var diff = (Date.now() - new Date(birthDate)) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  };

  const age = getAge;
  return (
    <div className="person-list-item">
      <div className="field">{firstName}</div>
      <div className="field">{lastName}</div>
      <div className="field">{mothersLastName}</div>
      <div className="field">{gender}</div>
      <div className="field">{state}</div>
      <div className="field">{city}</div>
      <div className="field">{new Date(birthDate).toISOString().substring(0, 10)}</div>
      <div className="field">{getAge(age)}</div>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </div>
  );
};

PersonListItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mothersLastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthDate: PropTypes.number.isRequired
};

export default PersonListItem;
