"use client"
import PaymentCard from "./PaymentCard"
import { initiate } from "@/serverActions/userActions"
import Script from "next/script"
const Paymentpage = ({ username, Supporters }) => {
    const pay = async (amount) => {
        //get the orderID
        let a = await initiate(amount, session?.username, paymentform);
        let orderID=a.id;
        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount,// Amount is in currency subunits. 
            "currency": "INR",
            "name": "BuyMeAChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.URL}/api/razerpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
    }
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <div className="">
                <main className="">

                    <div className="relative">
                        <div className="BANNER bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F4d%2F16%2F78%2F4d1678e171347c4402c231dad0394f0f.gif&f=1&nofb=1&ipt=b0f42a0580ab2be444b87e16b62765f0b81ffe102a000549fc1ce08a019c4e5c)] bg-contain w-full border-2 border-t-0 rounded-b-xl border-b-0 border-amber-300 h-[22vh]">
                        </div>
                        <div className="absolute top-[10vh] right-[45%]  rounded-full">
                            <img className="w-50 border-amber-300 border-t-0 border-[3px] rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fipeeworld.com%2Fwp-content%2Fuploads%2F2021%2F06%2Ffunny-cat.jpeg&f=1&nofb=1&ipt=be8b5d22c49c0fc0a77fabf3163a635aa867d64283efd38d98124e54c05b8a1e" alt="ICON" />
                            <div className="text-center text-4xl relative pb-6 font-bold flex flex-col justify-center items-center">
                                <div className="capitalize">{username}</div>
                                <div className="text-sm absolute bottom-0 text-nowrap font-semibold text-gray-400 text-center hover:text-gray-200">
                                    Creates explanation video on physsics and math
                                </div>
                                <div className="text-sm font-semibold absolute bottom-[-2.5vh] hover:text-slate-200 text-slate-400 text-nowrap">
                                    9201 posts • 22 donors • ₹823.28/month
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20vh] grid grid-cols-2 grid-rows-1">
                            <div className=" SUPPORTERS">

                                <div className="TABLEOFSUPRT ">
                                    <div className="ml-6 text-2xl m-2 font-mono font-bold">
                                        Recent supports
                                    </div>
                                    <div className="mx-5 my-2 hover:border-2 border-amber-300 mb-4 bg-linear-to-br from-slate-800 to-slate-900 shadow-2xl rounded-xl border-0 ">

                                        <div className="overflow-y-auto max-h-80">
                                            <div className="space-y-4 p-4">
                                                {Supporters.map((e) => {
                                                    return (
                                                        <div key={e.uuid} className="bg-slate-800/50 p-4 rounded-lg border border-slate-600/30 hover:bg-slate-700/50 transition-colors duration-200">
                                                            <div className="font-medium text-white text-lg">{e.Name}</div>
                                                            <div className="text-green-400 font-semibold mt-2">₹{e.Amount}</div>
                                                            <div className="text-gray-300 mt-1">{e.Message}</div>
                                                        </div>
                                                    )
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <PaymentCard username={username} pay={pay} />
                        </div>

                    </div>
                </main>

            </div>


        </>
    )
}

export default Paymentpage
