import React from "react";
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import "./person-edit.styles.scss"

class PersonEdit extends React.Component {
    render() {
        const { handleSubmit, firstName, lastName, mothersLastName, gender, state, city, birthDate} = this.props;
        return (
            <div className="person-edit">
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus
                        name="firstName" 
                        component={this.renderField} 
                        label="Nombre"></Field>
                    <Field 
                        name="dni" 
                        component={this.renderField} 
                        label="Dni"></Field>
                </form>
            </div>
        )
    };
}

PersonEdit.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    mothersLastName: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    birthDate: PropTypes.number.isRequired
  };

export default PersonEdit;