import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    email: { type: String, require: true },
    name: { type: String },
    username: { type: String, require: true },
    profilePicURl: { type: String },
    bannerPicURL: { type: String },
    creeatTime: { type: Date, default: Date.now },
    UpdateTime: { type: Date, default: Date.now },
})

export default mongoose.models.User || model("User", userSchema)
