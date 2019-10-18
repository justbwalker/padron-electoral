import { PeopleActionTypes } from "./people.types";

export const fetchPeople = () => {
    return { type: PeopleActionTypes.FETCH_PEOPLE, payload: [{
        id: 1,
        firstName: "Brian",
        lastName: "Walker",
        mothersLastName: "",
        gender: "M",
        state: "Chaco",
        city: "Resistencia",
        birthDate: Date.parse("1983-01-03")
      },
      {
        id: 2,
        firstName: "Juan",
        lastName: "Perez",
        mothersLastName: "Perezin",
        gender: "M",
        state: "Chaco",
        city: "Resistencia",
        birthDate: Date.parse("1982-01-03")
      }] };
  };