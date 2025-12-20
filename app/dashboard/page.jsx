"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

const Page = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [profile, setProfile] = useState({
        Name: "",
        Bio: "",
        ProfilePicURL: "",
        BannerURL: "",
        RazerpayID: "",
        RazorpaySecret: ""
    })
    useEffect(() => {
        if (!session) {
            router.push("./login")
        }
    }, [session, router])

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {

    }
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="max-w-md mx-auto mt-10">
                <h1 className="text-2xl font-bold mb-5 text-white">Dashboard - Update Your Profile</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profile.Name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Bio</label>
                        <textarea
                            name="bio"
                            value={profile.Bio}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Profile Picture URL</label>
                        <input
                            type="url"
                            name="profilePic"
                            value={profile.ProfilePicURL}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Banner URL</label>
                        <input
                            type="url"
                            name="banner"
                            value={profile.BannerURL}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Razorpay ID</label>
                        <input
                            type="text"
                            name="razorpayId"
                            value={profile.RazerpayID}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Razorpay Secret</label>
                        <input
                            type="password"
                            name="razorpaySecret"
                            value={profile.RazorpaySecret}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button

                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </>
    )
}

export default Page
