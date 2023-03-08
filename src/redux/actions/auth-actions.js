import {
    LOGIN_SUCCESS, LOGIN_FAILURE,
    LOGOUT, SHOW_LOADER
} from '../action-types/auth-action-types'

export const loginSuccess = (roleUser) => ({
    type: LOGIN_SUCCESS,
    payload: roleUser
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
});

export const showLoader = () => ({
    type: SHOW_LOADER
});


export const logoutSuccess = () => ({
    type: LOGOUT
});

