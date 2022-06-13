export const checkStatus = ({ type: 'checkstatus' });

const categoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case 'checkstatus':
      return { categories: 'Under Construction' };

    default:
      return state;
  }
};

export default categoriesReducer;
