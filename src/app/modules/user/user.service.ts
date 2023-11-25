import User from "../models/user.model";
import { Iuser } from "./user.interface";





const createUser = async (userData:Iuser):Promise<Iuser> =>{
    const result  = await User.create(userData)

    return result
}


export const UserManagementService ={
    createUser
}