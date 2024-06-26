"use client"
 
import { UserSchema } from "@/schemas/UserSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createUser } from "@/actions/createUser"
import { useRouter } from "next/navigation"


export default function userform() {

  const router = useRouter();
    // 1. Define your form.
    const form = useForm<z.infer<typeof UserSchema>>({
      resolver: zodResolver(UserSchema),
      defaultValues: {
        name: "",
        semester: "",
        description: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof UserSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
      createUser(values).then(()=>{
        router.push('\home') 
      })

    }
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="semester"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Semester</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Semester No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  }
