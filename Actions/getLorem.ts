'use server'

import prisma from "@/lib/db";

export const GetLorem  = async () => {
return await prisma.lorem.findMany()
    
}