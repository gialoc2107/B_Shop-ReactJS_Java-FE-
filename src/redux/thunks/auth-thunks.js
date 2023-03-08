import {
    loginFailure,
    loginSuccess,
    logoutSuccess,
} from "../actions/auth-actions";
import RequestService from '../../util/request-service';

export const login = (userData, navigate) => async (dispatch) => {
    try {
        const response = await RequestService.post("/auth/login", userData, 1500);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.userName);
        localStorage.setItem("roleUser", response.data.roleUser);
        localStorage.setItem("isLoggedIn", "true");
        dispatch(loginSuccess(response.data.userRole));
        navigate("/administration");
    } catch (error) {
        dispatch(loginFailure(error.response.data.message));
    }
};

export const logout = (navigate) => async (dispatch) => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isLoggedIn");
    dispatch(logoutSuccess);
    navigate("/")
};