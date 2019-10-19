import { handleActions } from "redux-actions";
import { PeopleActionTypes } from "./people.types";

export const people = handleActions(
  {
    [PeopleActionTypes.FETCH_PEOPLE]: (state, action) => [...action.payload],
    [PeopleActionTypes.INSERT_PERSON]: (state, action) => {
      action.payload.id = "3";
      return [...state, action.payload];
    },
    [PeopleActionTypes.UPDATE_PERSON]: (state, action) => {
      const updatedState = state.reduce((acc, person) => {
        if (person.id === action.payload.id) {
          return [...acc, action.payload];
        } else {
          return [...acc, person];
        }
      }, []);

      console.log(updatedState);
      return updatedState;
    },
    [PeopleActionTypes.DELETE_PERSON]: (state, action) => state.filter(person => person.id !== action.payload)
  },
  []
);
