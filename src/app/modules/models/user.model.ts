import { Document, Query, Schema, model } from 'mongoose'
import { Iuser } from '../user/user.interface'

const userSchema = new Schema<Iuser>({
    userId: {
    type: Number,
    unique: true,
    required: [true, 'userId is required'],
  },
  username: {
    type: String,
    required: [true, 'username is required'],
  },
  password:{
    type:String,
    required:[true,'password is required']
  },
  fullName:{
      firstName:{
        type:String,
        required:[true,'firstName is required']
      },
      lastName:{
        type:String,
        required:[true,"lastName is required"]
      }
  },
  age:{
    type:Number,
    required:[true,"age is required"]
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required'],
    lowercase: true,
  },
  isActive:{
    type:Boolean,
    required:[true,"true or false required"]
  },
  hobbies:[String],
  address:{
    street:{
        type:String,
        required:[true,"Street address is required"]
    },
    city:{
        type:String,
        required:[true,"City address is required"]
    },
    country:{
        type:String,
        required:[true,"Conutry address id required"]
    }

  }
})


const User = model<Iuser>('User', userSchema)

export default User