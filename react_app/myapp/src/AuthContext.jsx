import { createContext, useState } from "react";
import LoginForm  from "./Pages/Login/Login.jsx";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({userName:"", password:""});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (userData) => {
        if (userData.userName === "admin" && userData.password === "admin") {
            setIsLoggedIn(true);
            setUser(userData);
        } else {
            setIsLoggedIn(false);
        }
    };

    return (
        <AuthContext.Provider value={{ ...user, isLoggedIn, setIsLoggedIn }}>
            <LoginForm login={handleLogin}>
            </LoginForm>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };