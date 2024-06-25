import { z } from "zod"

export const UserSchema = z.object({
    name: z.string().min(2).max(50),
    semester: z.string().min(1).max(2),
    description: z.string().min(2).max(50),
  })