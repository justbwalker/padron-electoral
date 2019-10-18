import React from "react";
import PropTypes from "prop-types";

import PersonEdit from "../../components/person-edit/person-edit.component";

import "./edit-person.styles.scss";

class EditPerson extends React.Component {
  render() {
    return (
      <div className="edit-person">
        <PersonEdit id={this.props.id} />
      </div>
    );
  }
}

EditPerson.propTypes = {
  id: PropTypes.string.isRequired
};

export default EditPerson;
