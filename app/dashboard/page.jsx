"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
const page = () => {
    const {data:session} =useSession()
    if(!session){
        const router=useRouter()
        router.push("./login")
    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div>
                dashboard
            </div>
        </>
    )
}

export default page
