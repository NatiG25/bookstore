const CHECKSTATUS = 'checkStatus';

// Action Creators
export const checkStatus = () => ({
  type: CHECKSTATUS,
});

// Reducers
const checkReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction';

    default:
      return state;
  }
};

export default checkReducer;
