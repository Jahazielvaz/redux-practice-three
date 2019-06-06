import action from '../actions';

const reducer = (state, action) => {
  console.log(state)
  if(action.type === 'MESSAGE'){
    return {
      ...state,
      message : action.msg
    }
  }

  return state
}

export default reducer;
