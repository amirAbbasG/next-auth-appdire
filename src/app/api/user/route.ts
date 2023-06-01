import bcrypt from "bcrypt"

import prisma from "@/lib/prisma";

interface ReqBody {
    email: string,
    name: string,
    password: string
}

export async function POST(req: Request) {
    const reqBody = await req.json()

    const user = await prisma.user.create({
       data: {
           email: reqBody.email,
           name: reqBody.name,
           password: await bcrypt.hash(reqBody.password, 10)
       }
    })

    const {password, ...result} = reqBody

    return new Response(JSON.stringify(result))
}