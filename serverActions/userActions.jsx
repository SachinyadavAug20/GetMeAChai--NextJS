"use server"
import Razorpay from "razorpay"
import payment from "@/models/payment"
import connectDB from "@/db/connect"
import user from "@/models/user"

export const initiate = async (amount, to_user, paymentForm) => {
    await connectDB();
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
    instance.orders.create({
        amount: 50000, currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        },

    })
    let options={
        amount:Number.parseInt(amount),
        currency:"INR",
    }
    let x=await instance.orders.create(options)
    //create pending payments DB
    await payment.create({
        id:x.id,amount:amount,to_user:to_user,name:x.paymentForm.name,message:paymentForm.message
    })

}
