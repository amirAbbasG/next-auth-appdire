import bcrypt from "bcrypt"

import prisma from "@/lib/prisma";
import {signJwtAccessToken} from "@/lib/jwt";

interface ReqBody {
    username: string,
    password: string
}

export async function POST(req: Request) {
    const reqBody: ReqBody = await req.json()

    const user = await prisma.user.findFirst({
        where: {
            email: reqBody.username
        }
    })

    if (user && (await bcrypt.compare(reqBody.password, user.password))) {
        const {password, ...userWithoutPass} = user
        const accessToken = signJwtAccessToken(userWithoutPass)
        return new Response(JSON.stringify({
            ...userWithoutPass,
            accessToken
        }))
    }

    return new Response(JSON.stringify(null))
}