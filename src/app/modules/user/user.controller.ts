import { Request } from "express";
import { UserManagementService } from "./user.service";
import userValidationSchema from "./user.validation";




const createUser = async(req: Request,res:Response) =>{
    try {
        const userData = req.body
        const useZodvalidationData = userValidationSchema.parse(userData)
        const result1 = await UserManagementService.createUser(useZodvalidationData)
        console.log(result1)
        res.status(201).json({
            success: true,
            message: "User created successfully!",
            data: result1
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "User creation failed.Try again",
            error: {
                code: 404,
                description: "User creation failed.Try again"
            }
        })
    }
}


export const userController = {
    createUser
}