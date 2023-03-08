
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const SHOW_LOADER = "SHOW_LOADER";
export const LOGOUT = "LOGOUT";

export const LoginSuccessType = {
    type: typeof LOGIN_SUCCESS,
    payload: '',
};
export const LoginFailureType = {
    type: typeof LOGIN_FAILURE,
    payload: ''
};

export const LogoutType = { type: typeof LOGOUT };
export const ShowLoaderType = { type: typeof SHOW_LOADER };

export const AuthActiontypes = LoginSuccessType | LoginFailureType
    | LogoutType | ShowLoaderType;