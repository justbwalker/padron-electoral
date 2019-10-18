import React from "react";

import PersonListItem from "../person-list-item/person-list-item.component";

import "./person-list.styles.scss";

class PersonList extends React.Component {
  constructor() {
    super();

    this.state = {
      persons: []
    };
  }

  componentDidMount() {
    let persons = [];
    persons.push({
      id: 1,
      firstName: "Brian",
      lastName: "Walker",
      mothersLastName: "",
      gender: "M",
      state: "Chaco",
      city: "Resistencia",
      birthDate: Date.parse("1983-01-03")
    });
    persons.push({
      id: 2,
      firstName: "Juan",
      lastName: "Perez",
      mothersLastName: "Perezin",
      gender: "M",
      state: "Chaco",
      city: "Resistencia",
      birthDate: Date.parse("1982-01-03")
    });

    this.setState({ persons: persons });
  }

  render() {
    return (
      <div className="person-list">
        {this.state.persons.map(person => (
          <PersonListItem key={person.id} {...person}></PersonListItem>
        ))}
      </div>
    );
  }
}

export default PersonList;
