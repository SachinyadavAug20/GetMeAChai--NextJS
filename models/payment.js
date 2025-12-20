import mongoose from "mongoose";
const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    message: { type: String, require: true },
    to_name: { type: String, require: true },
    from_name: { type: String, require: true },
    orderID: { type: String, require: true },
    amount: { type: Number, require: true },
    time: { type: Date, default: Date.now },
    username: { type: String },
    profilePicURl: { type: String },
    bannerPicURL: { type: String },
    done: { type: Boolean, default: false },
})

export default mongoose.models.Payment || model("Payment", paymentSchema)
