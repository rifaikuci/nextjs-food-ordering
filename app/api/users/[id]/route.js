import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ,{params}) {
    await dbConnect();
let users ;
    try {
         users = await User.findById(params.id);

        return NextResponse.json(  users, {status : 200})

    } catch (err) {
        console.log(err);
    }


    return NextResponse.json( users);
}

export async function PUT(req,{params} ) {
    await dbConnect();
    const body =  await  req.json();

    try {
        if (body.password) {
            let tempPassword = body.password;
            body.password = await bcrypt.hash(tempPassword, 10);
            body.confirmPassword = body.password
        }
        const users = await User.findByIdAndUpdate(params.id, body, {
            new: true,
        });

        return NextResponse.json(  users, {status : 200})
    } catch (err) {
        console.log(err);
    }

}


