import { useState } from "react"
import { handleLogin, setTokens } from "../api";

function Login({ onLogin }) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleClick = async () => {
       const login = await handleLogin(email,password);
       if(login.status === 200){
            setEmail("")
            setPassword("")
            setTokens(login.data.data.accessToken)
            onLogin(login.data.data.accessToken)
            alert(login.data.message)
       }else{
        const {email=[],password=[]} = login.data.errors;
        const err = [...email,...password];
        alert(err.join("\n"));
       }
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
                    <div className="btn mt-10">
                        {/* <button onClick={handleClick} type="submit" className="bg-orange-500 text-white px-5 py-1 rounded">Submit</button> */}
                        <button onClick={handleClick} type="submit" className="bg-orange-500 text-white px-5 py-1 rounded">Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login