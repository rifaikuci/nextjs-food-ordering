import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import Product from "@/models/Product";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ) {
    await dbConnect();

    try {
        const products = await Product.find();

        return NextResponse.json(products, {
            status :200
        });
    } catch (err) {
        console.log(err);
    }
}


export async function POST(req ) {
    await dbConnect();
    const res = await req.json() // res now contains body

    const data = await Product.create(res);

    return NextResponse.json(data, {
        status :200
    });
}
