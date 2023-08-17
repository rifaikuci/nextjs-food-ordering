import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import Order from "@/models/Order";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ) {
    await dbConnect();

    try {
        const orders = await Order.find();

        return NextResponse.json(orders, {
            status :200
        });
    } catch (err) {
        console.log(err);
    }
}


export async function POST(req ) {
    await dbConnect();
    const res = await req.json() // res now contains body

    const data = await Order.create(res);

    return NextResponse.json(data, {
        status :200
    });
}
