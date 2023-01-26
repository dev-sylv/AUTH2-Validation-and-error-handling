import mongoose, { Schema, model, Document } from "mongoose";

interface users {
    name: string;
    email: string;
    password: string;
    wishlist: [];
    shop: {}[];
    shoppedList: {}[];
}

interface iUSERS extends users, Document{};

const userSchema  = new Schema({
    name:{
        type: String,
        required: [true, "Please enter your email if you're a human being"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email dear human being"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please enter your a strong password"],
        minlength : 8,
    },
    wishlist: [
        {
            type: String,
        }
    ],
    shop: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "shopCollections"
        }
    ],
    shoppedList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productsCollections"
        }
    ]
}, {timestamps: true});

const usersModel = model<iUSERS>("usersCollections", userSchema);

export default usersModel;