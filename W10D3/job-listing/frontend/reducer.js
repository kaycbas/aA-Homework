const _initialState = {
  city: "Please Select", 
  jobs: []
};

const reducer = (state = _initialState, action) => {
  switch (action.type) {
    case("SWITCH_LOCATION"):
      return {city: action.city, jobs: action.jobs};
    default:
      return state;
  }
};

// window.reducer = reducer

export default reducer;
