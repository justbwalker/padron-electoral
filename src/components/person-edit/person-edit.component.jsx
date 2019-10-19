import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";

import { insertPerson, updatePerson } from "../../redux/people/people.actions";
import { getPersonById } from "../../redux/people/people.selectors";

import Button from "../button/button.component";

import "./person-edit.styles.scss";
import "react-datepicker/dist/react-datepicker.css";

class PersonEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      firstName: "",
      lastName: "",
      mothersLastName: "",
      gender: "",
      state: "",
      city: "",
      birthDate: Date.now()
    };
  }

  componentDidMount() {
    if (this.props.person) {
      const { id, firstName, lastName, mothersLastName, gender, state, city, birthDate } = this.props.person;

      console.log(this.props.person);

      this.setState({
        id: id,
        firstName: firstName,
        lastName: lastName,
        mothersLastName: mothersLastName,
        gender: gender,
        state: state,
        city: city,
        birthDate: birthDate
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.props.id) {
      this.props.updatePerson(this.state);
    } else {
      this.props.insertPerson(this.state);
    }

    this.props.history.push("/");
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleDateChange = value => {
    this.setState({ birthDate: Date.parse(value) });
  };

  cancel = () => {
    this.props.history.push("/");
  };

  render() {
    const { firstName, lastName, mothersLastName, gender, state, city, birthDate } = this.state;

    return (
      <div className="person-edit">
        <form className="person-edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-field">
            <label>Nombre</label>
            <input className="form-input" name="firstName" type="text" onChange={this.handleChange} value={firstName} />
          </div>
          <div className="edit-field">
            <label>Apellido paterno</label>
            <input className="form-input" name="lastName" type="text" onChange={this.handleChange} value={lastName} />
          </div>
          <div className="edit-field">
            <label>Apellido materno</label>
            <input className="form-input" name="mothersLastName" type="text" onChange={this.handleChange} value={mothersLastName} />
          </div>
          <div className="edit-field">
            <label>Sexo</label>
            <div className="radio">
              <label>
                <input name="gender" type="radio" onChange={this.handleChange} value="M" checked={gender === "M"} />M
              </label>
              <label>
                <input name="gender" type="radio" onChange={this.handleChange} value="F" checked={gender === "F"} />F
              </label>
            </div>
          </div>
          <div className="edit-field">
            <label>Estado</label>
            <select name="state" onChange={this.handleChange} value={state}>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Chaco">Chaco</option>
              <option value="Corrientes">Corrientes</option>
            </select>
          </div>
          <div className="edit-field">
            <label>Ciudad</label>
            <input className="form-input" name="city" type="text" onChange={this.handleChange} value={city} />
          </div>
          <div className="edit-field">
            <label>Fecha de nacimiento</label>
            <DatePicker selected={new Date(birthDate)} onChange={this.handleDateChange} />
          </div>
          <div className="buttons">
            <Button type="submit">Guardar</Button>
            <Button onClick={this.cancel}>Cancelar</Button>
          </div>
        </form>
      </div>
    );
  }
}

PersonEdit.propTypes = {
  id: PropTypes.string,
  insertPerson: PropTypes.func.isRequired,
  updatePerson: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  person: getPersonById(state, props)
});

export default withRouter(
  connect(
    mapStateToProps,
    { insertPerson, updatePerson }
  )(PersonEdit)
);
