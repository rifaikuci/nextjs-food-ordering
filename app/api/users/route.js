import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ) {
    await dbConnect();

    let res;
    try {
         res = await User.find();

        console.log(res)
    } catch (err) {
        console.log(err);
    }


    return NextResponse.json( res);
}


export async function POST(req ) {
    await dbConnect();
    const res = await req.json() // res now contains body

    await User.create(res);

    return NextResponse.json( res);
}
