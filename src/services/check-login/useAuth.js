const useAuth = () => {
    const auth = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return auth && isLoggedIn;
};

export default useAuth;