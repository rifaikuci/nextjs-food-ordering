import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import Product from "@/models/Product";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ,{params}) {
    await dbConnect();
    let product;
    try {
         product = await Product.findById(params.id);

        return NextResponse.json(  product, {status : 200})
    } catch (err) {
        console.log(err);
    }


    return NextResponse.json(  product, {status : 406})
}


export async function DELETE(req,{params} ) {
    await dbConnect();
  let product

    try {
      product = await Product.findByIdAndDelete(params.id);

        return NextResponse.json(  product, {status : 200})
    } catch (err) {
        const product = await Product.findByIdAndDelete(params.id);

        return NextResponse.json(  {message : "Başarısız"}, {status : 406})
    }

}


