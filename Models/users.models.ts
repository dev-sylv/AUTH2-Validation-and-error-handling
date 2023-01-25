import mongoose, { Schema, model, Document } from "mongoose";

interface user{
    name: string;
    email: string;
    password: string;
    stack: string;
    isAdmin: boolean
};

interface iUser extends user, Document{};

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please enter a strong password"],
        minlength: 8,
    },
    stack: {
        type: String,
        required: [true, "Please enter your stack"]
    },
    isAdmin: {
        type: String,
        default: false
    }
});

const userModels = model<iUser>("new users collections", userSchema);

export default userModels;