import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    employeeId: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['team lead', 'employee']
    },
    profilePicture: {
        type: String
    }
});

const User = model('User', UserSchema);

export default User;
