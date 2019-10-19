import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import Button from "../button/button.component";

import "./person-list-item.styles.scss";

const PersonListItem = ({ history, id, firstName, lastName, mothersLastName, gender, state, city, birthDate, deleteAction }) => {
  const getAge = date => {
    if (!date) return 0;
    var diff = (Date.now() - new Date(date)) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff / 365.25));
  };

  const getIsoDate = date => {
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    return newDate.toISOString().substring(0, 10);
  };

  const handleOnDelete = () => {
    deleteAction(id);
  };

  return (
    <div className="person-list-item">
      <div className="field">{firstName}</div>
      <div className="field">{lastName}</div>
      <div className="field">{mothersLastName}</div>
      <div className="field">{gender}</div>
      <div className="field">{state}</div>
      <div className="field">{city}</div>
      <div className="field">{getIsoDate(birthDate)}</div>
      <div className="field">{getAge(birthDate)}</div>
      <Button onClick={() => history.push(`/${id}`)}>Editar</Button>
      <Button onClick={handleOnDelete}>Eliminar</Button>
    </div>
  );
};

PersonListItem.propTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mothersLastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthDate: PropTypes.number.isRequired,
  deleteAction: PropTypes.func.isRequired
};

export default withRouter(PersonListItem);
