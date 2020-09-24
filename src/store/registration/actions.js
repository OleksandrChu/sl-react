import axios from "axios";

export const FETCH_MEMBERSHIP_TYPES_SUCCESS = 'FETCH_MEMBERSHIP_TYPES_SUCCESS'
export const FETCH_MEMBERSHIP_TYPES_FAILURE = 'FETCH_MEMBERSHIP_TYPES_FAILURE'
export const FETCH_MEMBERSHIP_TYPES = 'FETCH_MEMBERSHIP_TYPES'

export const fetchTypes = () => {
    return {
        type: FETCH_MEMBERSHIP_TYPES,
    }
}

export const fetchTypesSuccess = (types) => {
    return {
        type: FETCH_MEMBERSHIP_TYPES_SUCCESS,
        payload: types
    }
}

export const fetchTypesFailure = (error) => {
    return {
        type: FETCH_MEMBERSHIP_TYPES_FAILURE,
        payload: error
    }
}

export const fetchMembershipTypes = (url) => {
    return (dispatch) => {
        dispatch(fetchTypes())
        axios.get(url)
            .then(response => {dispatch(fetchTypesSuccess(response.data))})
            .catch(error => dispatch(fetchTypesFailure(error)))
    }
}