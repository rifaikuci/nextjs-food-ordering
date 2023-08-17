
import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import cookie from "cookie";
import {cookies} from "next/headers";
import Category from "@/models/Category";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function POST(req ) {
    await dbConnect();
    const body  =  await  req.json();

    try {
        const newCategory = await Category.create(body);

        return  NextResponse.json(newCategory,
            {
                status : 200
            })
    } catch (err) {
        return  NextResponse.json({message: "Başarısız"},
            {
                status : 406
            })
    }
}



export async function GET(req ) {
    try {
        const categories = await Category.find();
        return  NextResponse.json(categories,
            {
                status : 200
            })
    } catch (err) {
        console.log(err);
    }
}


