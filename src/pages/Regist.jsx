import { useState } from "react";
import { Register } from "../api";

function Regist() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register(name, email, password);
        if (apiRegis.status === 201) {
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        } else {
            const { name = [], email = [], password = [] } = apiRegis.data.errors;
            const err = [...name, ...email, ...password]
            alert(err.join("\n"));
        }
    }


    return (
        <>
            <div className="regist-form flex justify-center mt-16">
                <div className="bg-sky-950 p-10 rounded-2xl w-96">
                    <div className="mb-6">
                        <h1 className="font-semibold text-3xl text-center  text-white">Register</h1>
                    </div>
                    <form action="" className="flex flex-col gap-6">
                        <div className="name-section ">
                            <input value={name} onChange={(e) => setName(e.target.value)} className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="email-section">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="password-section">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="password" id="password" placeholder="Password" />
                        </div>
                    </form>
                    <div className="btn mt-10">
                        <button onClick={handleRegister} type="submit" className="bg-orange-500 text-white px-5 py-1 rounded">Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Regist