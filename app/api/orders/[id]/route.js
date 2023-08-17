import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import Order from "@/models/Order";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ,{params}) {
    await dbConnect();
    let order;
    try {
         order = await Order.findById(params.id);

        return NextResponse.json(  order, {status : 200})
    } catch (err) {
        console.log(err);
    }


    return NextResponse.json(  order, {status : 406})
}


export async function DELETE(req,{params} ) {
    await dbConnect();
  let order

    try {
      order = await Order.findByIdAndDelete(params.id);

        return NextResponse.json(  order, {status : 200})
    } catch (err) {
        const order = await Order.findByIdAndDelete(params.id);

        return NextResponse.json(  {message : "Başarısız"}, {status : 406})
    }

}

export async function PUT(req, {params} ) {

    let body = await  req.json();
    const order = await Order.findByIdAndUpdate(params.id, body, {
        new: true,
    });
    console.log(order)

    return NextResponse.json(  order, {status : 200})

}


