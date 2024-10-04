import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.set("toJSON",{
    transform: (document, returnedObject) => {
        delete returnedObject.__v
        delete returnedObject.password
    }
})

export default mongoose.model("User", userSchema)