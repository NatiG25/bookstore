const CHECKSTATUS = 'CHECKSTATUS'
export const checkStatus = ({ type: CHECKSTATUS });

const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return { categories: 'Under Construction' };

    default:
      return state;
  }
};

export default categoriesReducer;
