const formReducerFn = (state, action) => {
  if (action.type === "nameChange") {
    return {
      ...state,
      name: action.value.target.value,
    }
  }
  if (action.type === "emailChange") {
    return {
      ...state,
      email_id: action.value.target.value,
    }
  }
  if (action.type === "phoneChange") {
    return {
      ...state,
      phone: action.value,
    }
  }
  if (action.type === "stateChange") {
    return {
      ...state,
      state: action.value.value,
    }
  }
  if (action.type === "cityChange") {
    return {
      ...state,
      city: action.value.value,
    }
  }
  if (action.type === "collegeChange") {
    return {
      ...state,
      college_id: action.value.value,
    }
  }
  if (action.type === "yearChange") {
    return {
      ...state,
      year: action.value.value,
    }
  }
  if (action.type === "genderChange") {
    return {
      ...state,
      gender: action.value.target.id,
    }
  }
  if (action.type === "choreoChange") {
    // const newValue = state.choreographer === "NO" ? "YES" : "NO";
    return {
      ...state,
      choreographer: action.value.target.value,
    }
  }
  if (action.type === "headChange") {
    // const newValue = state.head_of_society === "NO" ? "YES" : "NO";
    return {
      ...state,
      head_of_society: action.value.target.value,
    }
  }
  if (action.type === "visitorChange") {
    // const newValue = state.visitor === "NO" ? "YES" : "NO";
    return {
      ...state,
      visitor: action.value.target.value,
    }
  }
  if (action.type === "eventChange") {
    const eventsArray = action.value
    // console.log(eventsArray);
    const eventsName = eventsArray.map((item) => {
      return item.value
    })
    return {
      ...state,
      events: eventsName,
    }
  }

  return state
}

export default formReducerFn
