import { createContext, useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { getToken, handleLogin, removeToken, setTokens } from "../config/api"

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

    // function
    const doLogin = async (email, password) => {
        //memanggil api dengan email & password
        console.log("login dengan memanggil", email, password)
        //memanggil api dengan axios
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)
        console.log(apiResult.data.data.accessToken)
        //jika berhasil maka isLoggedin -> true
        //simpan token kedalam local storage
        console.log("tes kepanggil", isLoggedin)
        setIsLoggedin(true)
        setTokens(apiResult.data.data.accessToken)
        console.log("berhasil login")
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
