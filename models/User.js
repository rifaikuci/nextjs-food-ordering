import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            default: "Rifai"
        },
        email: {
            type: String
        },

        phoneNumber: {
            type: String
        },
        address: {
            type: String
        },
        job: {
            type: String
        },
        bio: {
            type: String
        },
        password: {
            type: String,
        },
        confirmPassword: {
            type: String,
        },
        emailVerified: {
            type: String,
            default: null
        }
    },
    {timestamps: true})

export default  mongoose.models.User || mongoose.model("User",UserSchema);