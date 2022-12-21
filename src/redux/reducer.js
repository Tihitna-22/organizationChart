import * as types from './actionType'

const initialState = {
    employers: [],
    employer: {},
    loading: true,
    isOpend: false
}
const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_EMPLOYERS:
            return {
                ...state,
                employers: action.payload,
                loading: false
            };
        case types.DELETE_EMPLOYERS:
            return {
                ...state,
                loading: false
            };
        case types.ADD_EMPLOYERS:
        case types.UPDATE_EMPLOYERS:

            return {
                ...state,
                loading: false
            };
        case types.GET_SINGLE_EMPLOYER:
            return {
                ...state,
                employer: action.payload,
                loading: false
            };


        default:
            return state;
    }
}
export default usersReducers;