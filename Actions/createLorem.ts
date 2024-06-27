'use server'

import prisma from "@/lib/db";
import { formSchema } from "@/schemas/schema"

import { z } from "zod"

export const CreateLorem = async (values:z.infer<typeof formSchema>) =>{

    const validatedValues = formSchema.safeParse(values);

    if(!validatedValues.success){
        return({error: 'Invalid Values' })
    }

    await prisma.lorem.create({
        data:{
            name: validatedValues.data?.name,
            isCompleted: true
        }
    })

}