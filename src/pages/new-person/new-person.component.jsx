import React from "react";

import PersonEdit from "../../components/person-edit/person-edit.component";

import "./new-person.styles.scss";

class NewPerson extends React.Component {
  render() {
    return (
      <div className="new-person">
        <PersonEdit />
      </div>
    );
  }
}

export default NewPerson;
