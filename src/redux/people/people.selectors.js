import { createSelector } from 'reselect';

export const getPeople = state => state.people;

export const getPersonById = createSelector(
    (state, props) => state.people.find(p => p.id == props.id),
    person  => person 
);