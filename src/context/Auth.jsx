import { createContext, useContext, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { handleLogin } from "../api"

// nilai default
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

    // function
    const doLogin = async (email, password) => {
        //memanggil api dengan email & password
        console.log("login dengan memanggil", email, password)
        //memanggil api dengan axios
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)

        console.log("tes kepanggil", isLoggedin)
        setIsLoggedin(true)
    }

    const doLogout = () => {
        setIsLoggedin(false)
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
