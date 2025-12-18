"use client"

import { useState } from "react"

const PaymentCard = ({ username }) => {
    const [amount, setAmount] = useState(0)

    return (

        <div className="bg-slate-800 m-auto w-11/12 h-10/12 mt-11 hover:border-2 border-amber-300 p-4 rounded-xl shadow-lg PAYMENTS">
            <h3 className="text-lg font-bold text-amber-300 mb-3 text-center capitalize">
                Make a Donation to {username}
            </h3>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => { setAmount(5) }} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <span className="mr-2">🫖</span> <span className="text-green-400">$5</span> - Cutting Chai
                    </button>
                    <button onClick={() => { setAmount(10) }} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <span className="mr-2">🥛</span> <span className="text-green-400">$10</span> - Doodh Chai
                    </button>
                    <button onClick={() => { setAmount(25) }} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <span className="mr-2">🌿</span> <span className="text-green-400">$25</span> - Masala Chai
                    </button>
                    <button onClick={() => { setAmount(50) }} className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                        <span className="mr-2">🔥</span> <span className="text-green-400">$50</span> - Kadak Masala Chai
                    </button>
                </div>
                <div className="pt-3 justify-center items-center flex">
                    <input
                        value={`${amount}`}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                        type="text"
                        placeholder="Enter custom amount"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                    />
                    <div className="ml-2 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-green-500">
                        USD
                    </div>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors">
                    Donate Now
                </button>
            </div>
        </div>


    )
}

export default PaymentCard
