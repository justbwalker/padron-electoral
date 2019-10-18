import { handleActions } from "redux-actions";
import { PeopleActionTypes } from "./people.types";

export const people = handleActions({
    [PeopleActionTypes.FETCH_PEOPLE]: (state, action) => [ ...action.payload],
    //[PeopleActionTypes.INSERT_PERSON]: (state, action) => [ ...state, action.payload ],
    //[PeopleActionTypes.UPDATE_PERSON]: (state, action) => [ ...state, action.payload ],
    [PeopleActionTypes.DELETE_PERSON]: (state, action) => state.filter(p => p.id !== action.payload)
}, []);