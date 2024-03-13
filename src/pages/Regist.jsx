function Regist() {

    return (
        <>
            <div className="regist-form flex justify-center mt-16">
                <div className="bg-sky-950 p-10 rounded-2xl w-96">
                    <div className="mb-6">
                        <h1 className="font-semibold text-3xl text-center  text-white">Registration</h1>
                    </div>
                    <form action="" className="flex flex-col gap-4">
                        <div className="name-section ">
                            <label htmlFor="name" className="block text-white">Name</label>
                            <input className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="text" id="name" placeholder="Name" />
                        </div>
                        <div className="email-section">
                            <label htmlFor="email" className="block text-white">Email</label>
                            <input className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="password-section">
                            <label htmlFor="password" className="block text-white">Password</label>
                            <input className="outline-none text-white px-2 py-1 w-full rounded bg-sky-800" type="password" id="password" placeholder="Password" />
                        </div>
                    </form>
                    <div className="btn mt-10">
                        <button type="submit" className="bg-orange-500 text-white px-5 py-1 rounded">Submit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Regist