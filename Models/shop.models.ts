import mongoose, {Schema, model, Document} from "mongoose";

interface shops {
    shopname: string;
    products: {}[];
};

interface iSHOPS extends shops, Document{};

const shopSchema = new Schema({
    shopname:{
        type: String,
        required: [true, "Please enter your shopname/brand"]
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "productsCollections"
        }
    ]
}, {timestamps: true});

const shopModels = model<iSHOPS>("shopCollections", shopSchema);

export default shopModels;