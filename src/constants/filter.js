export const filterActionTypes = {
  SET_FILTER: "SET_FILTER",
};

export const filterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_COMPLETED: "SHOW_COMPLETED",
};

export const filterNames = ["Active", "All", "Completed"];

Object.freeze(filterActionTypes);
Object.freeze(filterTypes);
Object.freeze(filterNames);

export default filterActionTypes;
