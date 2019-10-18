import { handleActions } from 'redux-actions';
import { FETCH_PEOPLE,
INSERT_PERSON,
UPDATE_PERSON,
DELETE_PERSON } from './PeopleActionTypes';

export const people = handleActions({
    [FETCH_PEOPLE]: (state, action) => [ ...action.payload],
    //[INSERT_PERSON]: (state, action) => [ ...state, action.payload ],
    //[UPDATE_PERSON]: (state, action) => [ ...state, action.payload ],
    [DELETE_PERSON]: (state, action) => state.filter(p => p.id !== action.payload)
}, []);