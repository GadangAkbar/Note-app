import Regist from './pages/Regist'
import Login from './pages/Login'
import Navbar from './Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path={"/Regist"} element={<Regist />} />
                    <Route path={"/Login"} element={<Login />} />
                    <Route path={"/Note"} element={<Note />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App