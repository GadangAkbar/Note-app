import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Note from "./Note"
import Login from "./pages/Login"
import Regist from "./pages/Regist"
import { useAuth } from "./context/Auth"
// import { setTokens } from "./token"

function App() {
    //panggil nilai isLoggedin dari context
    const { isLoggedin } = useAuth()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />}>
                        {isLoggedin ? (
                            //halaman Note akan terbuka ketika isLoggedin true
                            //
                            <>
                                <Route path={"/Note"} element={<Note />} />
                                <Route path={"/Regist"} element={<Navigate to={"/Note"} />} />
                                <Route path={"/Login"} element={<Navigate to={"/Note"} />} />
                            </>
                        ) : (
                            <>
                                <Route path={"*"} element={<Navigate to={"/Login"} />} />
                                <Route path={"/Regist"} element={<Regist />} />
                                <Route path={"/Login"} element={<Login />} />
                            </>
                        )}



                    </Route>
                    {/* {token !== null ?
                        <Route>
                            <Route path={"/Note"} element={<Note />} />
                            <Route path="*" element={<Navigate to={"/Note"} />} />
                        </Route>
                        : <Route path={"/Note"} element={<h1 className="text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                    {
                        token !== null ? null :
                            <Route>
                                <Route path={"/Regist"} element={<Regist />} />
                                <Route path={"/Login"} element={<Login onLogin={handleLogin} />} />
                            </Route>
                    }
                </Route>
                <Route path="*" element={<Navigate to={"/Login"} />} /> */}
                </Routes>

            </BrowserRouter >
        </>
    )
}

export default App