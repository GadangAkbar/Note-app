import { createContext, useContext, useEffect, useState } from "react";
import { getToken, handleLogin, removeToken, setTokens } from "../config/api";

// nilai default state
const initAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { }
}

// membuat context
const AuthContext = createContext(initAuthState)

// custom hooks
const useAuth = () => {
    return useContext(AuthContext)
}

// membuat provider
const AuthProvider = ({ children }) => {
    // state
    const [isLoggedin, setIsLoggedin] = useState(false)

    useEffect(() => {
        const token = getToken()
        if (token != null) {
            setIsLoggedin(true)
        }
    }, [])

    const doLogin = async (email, password) => {
        //memanggil api dengan email & password
        //memanggil api dengan axios
        const apiResult = await handleLogin(email, password)
        //jika berhasil maka isLoggedin -> true
        //simpan token kedalam local storage
        setIsLoggedin(true)
        setTokens(apiResult.data.data.accessToken)
        //jika gagal tampilkan peringatan
    }

    const doLogout = () => {
        setIsLoggedin(false)
        removeToken()
    }
    // return provider
    return (
        <AuthContext.Provider value={{ isLoggedin, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

// export provider & hooks
export { AuthProvider, useAuth }
