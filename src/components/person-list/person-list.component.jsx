import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { fetchPeople } from '../../redux/people/people.actions';

import PersonListItem from "../person-list-item/person-list-item.component";

import "./person-list.styles.scss";

class PersonList extends React.Component {
  componentDidMount() {
    if (this.props.people.length === 0) {
      this.props.fetchPeople();
    }
  }

  render() {
    return (
      <div className="person-list">
        {this.props.people.map(person => (
          <PersonListItem key={person.id} {...person}></PersonListItem>
        ))}
      </div>
    );
  }
}

PersonList.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  people: PropTypes.array.isRequired,
};

PersonList.defaultProps = {
  people:  [ ]    
};

const mapStateToProps = state => ({
  people: state.people
});

export default connect(mapStateToProps, { fetchPeople })(PersonList);
