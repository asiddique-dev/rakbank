const initialState = {
    score: 0
  };
  
  const scoreReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          score: action.score
        };
      default:
        return state;
    }
  };
  
  export default scoreReducer;