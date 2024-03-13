import { Link, Outlet } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className="flex justify-around py-6 text-white">

                <nav className="flex gap-12">
                    <Link to={"/Note"} className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Note</Link>
                    <Link to={"/Regist"}  className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Register</Link>
                    <Link to={"/Login"} className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Login</Link>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar