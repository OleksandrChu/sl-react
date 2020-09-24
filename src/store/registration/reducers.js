import {
    FETCH_MEMBERSHIP_TYPES, FETCH_MEMBERSHIP_TYPES_FAILURE,
    FETCH_MEMBERSHIP_TYPES_SUCCESS,
} from "./actions";

const defaultState = {
    types: [],
    error: '',
    loaded: false
}

export const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MEMBERSHIP_TYPES :
            return {
                ...state
            }
        case FETCH_MEMBERSHIP_TYPES_SUCCESS :
            return {
                types: action.payload,
                error: '',
                loaded: true
            }
        case FETCH_MEMBERSHIP_TYPES_FAILURE :
            return {
                types: [],
                error: action.payload,
                loaded: false
            }
        default:
            return state
    }
}