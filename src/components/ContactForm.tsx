"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
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
import { Textarea } from "./ui/textarea"

const FormSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number.",
    }), // Supports international format
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }).max(500, {
        message: "Description must be at most 500 characters.",
    }),
});

export default function InputForm({tagLine}:{tagLine:string}) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        firstname: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    return (
        <div className="flex justify-center w-full h-[691px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-[45%] my-20 flex flex-col gap-5">
                    <div className="flex justify-center flex-col font-light gap-3">
                        <span className="text-3xl font-medium">{tagLine}</span>
                        <span className="text-sm">Send us a message about your details. Let us reach out to you.</span>
                    </div>
                    <div className="flex justify-between">
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-xs font-medium">First Name*</FormLabel>
                                <FormControl className="w-[376px]">
                                    <Input className="placeholder:text-xs"  placeholder="first_name" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-xs font-medium">Last name*</FormLabel>
                                <FormControl className="w-[376px]">
                                    <Input className="placeholder:text-xs" placeholder="lastname" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-between">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-xs font-medium">Email*</FormLabel>
                                <FormControl className="w-[376px]">
                                    <Input className="placeholder:text-xs" placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-xs font-medium">Phone*</FormLabel>
                                <FormControl className="w-[376px]">
                                    <Input className="placeholder:text-xs" placeholder="xxxxx-xxxxx" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-start">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className="text-xs font-medium">Description*</FormLabel>
                                <FormControl className="w-[376px]">
                                    <Textarea className="placeholder:text-xs" placeholder="descr..." {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button variant={"destructive"} className="w-[30%]" type="submit" >SEND MESSAGE</Button>
                </form>
            </Form>
        </div>
    )
}
