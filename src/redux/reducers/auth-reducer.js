import {
    LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, SHOW_LOADER,
} from '../action-types/auth-action-types'

const initialState = {
    user: {},
    userEmail: '',
    roleUser: '',
    isRegistered: false,
    loading: false,
    success: "",
    error: "",
    errors: {}
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true, errors: {} };

        case LOGIN_SUCCESS:
            return { ...state, roleUser: action.payload };

        case LOGIN_FAILURE:
            return { ...state, error: action.payload };

        case LOGOUT:
            return { ...state, roleUSer: "" };

        default:
            return state;
    }
};

export default reducer;