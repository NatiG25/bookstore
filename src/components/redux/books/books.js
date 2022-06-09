const ADD = 'add';
const REMOVE = 'remove';

// Action Creators
export const adding = () => {
    return {
        type: ADD,
    }
}

export const remove = () => {
    return {
        type: REMOVE,
    }
}

// Reducers
const bookReducer = (state = [], action) => {
    switch(action.type) {
        case ADD:
        return

        case REMOVE:
        return

        default:
            return state;
    }
}

export default bookReducer;
