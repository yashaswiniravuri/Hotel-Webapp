import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const {Schema} = mongoose;
const userSchema = new Schema({
    name:{
        type: String,
        trim: true,//to remove extra white space
        required:"Name is required"
    },
    email:{
        type: String,
        trim: true,//to remove extra white space
        required:"Email is required",
        unique:true,
    },
    password:{
        type: String,
        required:true,
        min:6,
        max:64
    },
    stripe_account_id:'',
    stripe_seller:{},
    stripeSession: {},
},
    {timestamps:true}//used when u update db
);

userSchema.pre('save',function(next){
    let user = this;
    //hash pwd only if user is changing the password or registering for the first time
    //makes sure to use this otherwise each time user.save() is esxecuted, pwd
    //will get auto updated and you can't login with original pwd
    if(user.isModified("password")){
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err){
                console.log("BCRYPT HASH ERR",err);
                return next(err);
            }
            user.password=hash;
            return next();
        });
    }else{
        return next();
    }
});
userSchema.methods.comparePassword=function(password, next){
    bcrypt.compare(password, this.password, function(err, match){
        if(err) {
            console.log('COMPARE PASSWORD ERR',err);
            return next(err,false);
        }
        //if no err, we get null
        console.log("MATCH PASSWORD",match);
        return next(null, match);//true
    });
};

export default mongoose.model("User",userSchema);