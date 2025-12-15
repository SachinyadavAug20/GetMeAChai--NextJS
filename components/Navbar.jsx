import Link from "next/link"
const Navbar = () => {
    return (<>
        <div className="bg-gray-900 h-14 items-center text-white flex justify-around">

            <Link href={"/"}>
                <div className="LOGO font-bold flex justify-center items-center gap-1 text-3xl">
                    <img className=" p-2 w-15" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia3.giphy.com%2Fmedia%2F3mJEIWPLBtgyCZTIlk%2Fsource.gif&f=1&nofb=1&ipt=8c72d46153617f8f3bdc1812f47ecea8431c91d6d00b158fac2bb302033de569" alt="LOGO" />
                    <span>Get Me a Chai!</span>
                </div>
            </Link>
            {/* <ul className="flex gap-4"> */}
            {/* <li>Home</li> */}
            {/* <li>About</li> */}
            {/* <li>Creators</li> */}
            {/* <li>Sign Up</li> */}
            {/* <li>LogIn</li> */}
            {/* </ul> */}
            <div>
                <Link href={"/login"}>
                    <button type="button" className=" text-white font-semibold hover:font-bold bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 border-green-600  rounded-xl border hover:border-2 transition-all duration-300 m-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
                </Link>
            </div>
        </div>
    </>)
}

export default Navbar
