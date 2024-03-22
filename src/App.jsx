import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./Layouts/Navbar";
import Note from "./modules/notes/Note";
import Login from "./modules/auth/Login";
import Regist from "./modules/auth/Regist";
import { useAuth } from "./modules/auth/AuthContext";

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
                </Routes>

            </BrowserRouter >
        </>
    )
}

export default App