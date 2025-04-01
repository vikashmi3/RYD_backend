const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    mobile:{
        type:String,
        require:true
    },
    IsMobileVerified:{
        type:String,
        default:''
    },
    IsEmailVerified:{
        type:String,
        default:""
    },
    token:{
        type:String,
        default:''
    },
    dataCreate:{
        type:String,
        require:true
    }
});


module.exports = mongoose.model('User',userSchema);

