import { useState } from "react"
import { useAuth } from "./AuthContext";

function Login() {
    const { doLogin } = useAuth()
    const { doLogout } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = () => {
        doLogin(email, password)
    }

    const handleLogout = () => {
        doLogout()
    }

    return (
        <>
            <div className="regist-form flex justify-center mt-16">
                <div className="bg-sky-950 p-10 rounded-2xl w-96">
                    <div className="mb-6">
                        <h1 className="font-semibold text-3xl text-center mb-4 text-white">Login</h1>
                    </div>
                    <form action="" className="flex flex-col gap-6">
                        <div className="email-section">
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="password-section">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="password" id="password" placeholder="Password" />
                        </div>
                    </form>
                    <div className="btn mt-10 flex gap-4">
                        <button onClick={handleLogin} type="submit" className="bg-orange-500 text-white px-5 py-1 rounded">Login</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login