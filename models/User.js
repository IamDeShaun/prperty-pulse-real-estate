import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";
const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is requires']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    image: {
        type: String
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }
        
    ]
}, {      
    timestamps: true
});

const User = models.User || model('User', User);

export default User;