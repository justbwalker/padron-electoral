import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { insertPerson, updatePerson } from "../../redux/people/people.actions";
import { getPersonById } from "../../redux/people/people.selectors";

import Button from "../button/button.component";

import "./person-edit.styles.scss";

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
      birthDate: ""
    };
  }

  componentDidMount() {
    if (this.props.person) {
      const { id, firstName, lastName, mothersLastName, gender, state, city, birthDate } = this.props.person;

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

    this.setState({
      firstName: "",
      lastName: "",
      mothersLastName: "",
      gender: "",
      state: "",
      city: "",
      birthDate: ""
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  cancel = () => {
    this.props.history.goBack();

    this.setState({
      firstName: "",
      lastName: "",
      mothersLastName: "",
      gender: "",
      state: "",
      city: "",
      birthDate: ""
    });
  };

  render() {
    const { firstName, lastName, mothersLastName, gender, state, city, birthDate } = this.state;

    return (
      <div className="person-edit">
        <form onSubmit={this.handleSubmit}>
          <label>Nombre</label>
          <input className="form-input" name="firstName" type="text" onChange={this.handleChange} value={firstName} />
          <label>Apellido paterno</label>
          <input className="form-input" name="lastName" type="text" onChange={this.handleChange} value={lastName} />
          <label>Apellido materno</label>
          <input className="form-input" name="mothersLastName" type="text" onChange={this.handleChange} value={mothersLastName} />
          <label>Sexo</label>
          <input className="form-input" name="gender" type="text" onChange={this.handleChange} value={gender} />
          <label>Estado</label>
          <input className="form-input" name="state" type="text" onChange={this.handleChange} value={state} />
          <label>Ciudad</label>
          <input className="form-input" name="city" type="text" onChange={this.handleChange} value={city} />
          <label>Fecha de nacimiento</label>
          <input className="form-input" name="birthDate" type="text" onChange={this.handleChange} value={birthDate} />
          <Button type="submit">Guardar</Button>
          <Button onClick={this.cancel}>Cancelar</Button>
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
