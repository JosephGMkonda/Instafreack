const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        min: 4,
        max: 20,
        unique: true
    },
    email: {
        type:String,
        max: 50,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6

    },
    profilePicture: {
        type: String,
        default:""
    },
    coverPicture: {
        type: String,
        default:""
    },
    followers: {
        type:Array,
        default:[]
    },
    following: {
        type:Array,
        default:[]
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    desc: {
        type:String,
        max:100

    },
    location: {
        type:String,
        max: 50
    },
    relationship: {
        type:Number,
        enum:[1,2,3],

    }

},
{timestamps: true}

);

module.exports = mongoose.model("User", userSchema);