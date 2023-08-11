import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function POST(req ) {
    await dbConnect();
    const body =  await  req.json();
    console.log(body)
    const user = await User.findOne({email: body.email});

    if (user) {
        return NextResponse.json(  {
            message: "User already exists",

        }, {status : 406})
    }

    try {
        const newUser = await new User(body);
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
        await newUser.save();
        return NextResponse.json(newUser, {
            status :200
        });

    } catch (err) {
        console.log(err)
    }
}



