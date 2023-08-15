
import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import cookie from "cookie";
import {cookies} from "next/headers";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function POST(req ) {
    await dbConnect();
    const {username, password}   =  await  req.json();


    if(username === process.env.ADMIN_USERNAME && password  === process.env.ADMIN_PASSWORD) {

        return  NextResponse.json({message : "Başarılı"},
            {
                headers : {
                    "Set-Cookie" :  cookie.serialize("token",process.env.ADMIN_TOKEN, {
                        maxAge : 60*60,
                        sameSite: "strict",
                        path: "/"
                    })
                },
                status : 200
            })
    } else {
        return  NextResponse.json({message : "Hatalı"},
            {
                status : 406
            })
    }
}


export async function PUT(req ) {
    const nextCookies = cookies(); // Get cookies object

    nextCookies.delete("token");

    return  NextResponse.json({message : "Başarılı"},{
            status : 200
        })

}


export async function GET(req ) {
    const nextCookies = cookies(); // Get cookies object

    const token = nextCookies.get('token') // Find cookie

        if(token && token.value === process.env.ADMIN_TOKEN) {
            return  NextResponse.json({message : token},
                {
                    status : 200
                })
        } else {
            return  NextResponse.json({message : "başarısız"},
                {
                    status : 406
                })
        }

}


