import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updatePerson } from "../../redux/people/people.actions";
import { getPersonById } from "../../redux/people/people.selectors";

import "./person-edit.styles.scss";

class PersonEdit extends React.Component {
  constructor(props) {
    super(props);
    
    this.setState({
        firstName: "",
        lastName: "",
        mothersLastName: "",
        gender: "",
        state: "",
        city: "",
        birthDate: ""
      });
  }

  handleSubmit = event => {
    event.preventDefault();

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
    console.log({ [name]: value })
    this.setState({ [name]: value });
  };

  render() {
    
    return (
      <div className="person-edit">
        <form onSubmit={this.handleSubmit}>
          <label>Nombre</label>
          <input className="form-input" name="firstName" type="text" onChange={this.handleChange} value={this.firstName} />
          <label>Apellido paterno</label>
          <input className="form-input" name="lastName" type="text" onChange={this.handleChange} value={this.lastName} />
          <label>Apellido materno</label>
          <input className="form-input" name="mothersLastName" type="text" onChange={this.handleChange} value={this.mothersLastName} />
          <label>Sexo</label>
          <input className="form-input" name="gender" type="text" onChange={this.handleChange} value={this.gender} />
          <label>Estado</label>
          <input className="form-input" name="state" type="text" onChange={this.handleChange} value={this.state} />
          <label>Ciudad</label>
          <input className="form-input" name="city" type="text" onChange={this.handleChange} value={this.city} />
          <label>Fecha de nacimiento</label>
          <input className="form-input" name="birthDate" type="text" onChange={this.handleChange} value={this.birthDate} />
        </form>
      </div>
    );
  }
}
/*
PersonEdit.propTypes = {    
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  mothersLastName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  birthDate: PropTypes.number.isRequired
};
*/
const mapStateToProps = (state, props) => ({
  person: getPersonById(state, props)
});

export default connect(
  mapStateToProps,
  { updatePerson }
)(PersonEdit);
