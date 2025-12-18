"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
const Navbar = () => {
    const { data: session } = useSession()
    const [showdropdown, setShowdropdown] = useState(false)


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
            {session ? <div className="flex items-center gap-2 border-0 rounded-2xl hover:bg-gray-800 px-3 py-1">


                <button id="dropdownDefaultButton" onMouseOver={() => { setShowdropdown(!showdropdown) }} className={`inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none`} type="button">
                    <Link href={`/dashboard`}>
                        <span className="text-lg text-white font-semibold capitalize">{session.user.email.split('@')[0].split("").filter(char => isNaN(char)).join('')}</span>
                    </Link>     <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                </button>
                <div
                    id="dropdown"
                    onMouseLeave={() => setShowdropdown(false)}
                    className={`z-10 absolute top-1 bg-gray-800 w-1/7 rounded-base shadow-lg
    border border-default-medium
    transform transition-all duration-200 ease-out
    ${showdropdown
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
  `}
                >
                    <ul className="p-2 text-sm text-body flex flex-col justify-center  font-medium space-y-1">
                        <li>
                            <Link
                                href="/dashboard"
                                className="inline-flex items-center w-full p-2 rounded
          transition-all duration-150 ease-out
          hover:bg-neutral-tertiary-strong hover:text-heading
          hover:font-semibold
                                hover:bg-gray-600
          hover:translate-x-1 hover:scale-[1.02]"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                href={`./${session.user.email.split('@')[0].split("").filter(char => isNaN(char)).join('')}`}
                                className="inline-flex items-center w-full p-2 rounded
          transition-all duration-150 ease-out
          hover:bg-neutral-tertiary-strong hover:text-heading
          hover:font-semibold
                                hover:bg-gray-600
          hover:translate-x-1 hover:scale-[1.02]"
                            >
                                Your page
                            </Link>
                        </li>

          {/*               <li> */}
          {/*                   <div */}
          {/*                       className="inline-flex items-center w-full p-2 rounded */}
          {/* transition-all duration-150 ease-out */}
          {/* hover:bg-neutral-tertiary-strong hover:text-heading */}
          {/* hover:font-semibold */}
          {/*                       hover:bg-gray-600 */}
          {/* hover:translate-x-1 hover:scale-[1.02]" */}
          {/*                   > */}
          {/*                       Earnings */}
          {/*                   </div> */}
          {/*               </li> */}

                        <li>
                            <Link
                                href={"/"}
                                onClick={()=>{signOut()}}
                                className="inline-flex items-center w-full p-2 rounded
          transition-all duration-150 ease-out
                                hover:bg-red-600
          hover:bg-neutral-tertiary-strong hover:text-heading
          hover:font-semibold
          hover:translate-x-1 hover:scale-[1.02]"
                            >
                                Sign out
                            </Link>
                        </li>
                    </ul>
                </div>
                <button onClick={() => signOut()} className="text-white font-semibold hover:font-bold bg-red-500 hover:bg-red-600 focus:ring-4 border-red-600 rounded-xl border hover:border-2 transition-all duration-300 m-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-sm px-4 py-2.5 text-center leading-5">Sign out</button>
            </div> :
                <div>
                    <Link href={"/login"}>
                        <button type="button" className=" text-white font-semibold hover:font-bold bg-linear-to-br from-green-400 to-blue-600 hover:bg-linear-to-bl focus:ring-4 border-green-600  rounded-xl border hover:border-2 transition-all duration-300 m-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
                    </Link>
                </div>
            }
        </div>
    </>)
}

export default Navbar
