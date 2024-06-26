"use server"
import prisma from "@/lib/db"
import { UserSchema } from "@/schemas/UserSchema"
import { z } from "zod"


export const createUser=async (values:z.infer<typeof UserSchema>)=>{
    
    const user =await prisma.user.create({
      data:{
        name: values.name,
        semester: values.semester,
        description:values.description,
        liked: false,

      }
    })

}