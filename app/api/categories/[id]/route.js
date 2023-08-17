import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import Category from "@/models/Category";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ,{params}) {
    await dbConnect();
    let category;
    try {
         category = await Category.findById(params.id);

        return NextResponse.json(  category, {status : 200})
    } catch (err) {
        console.log(err);
    }


    return NextResponse.json(  category, {status : 406})
}


export async function DELETE(req,{params} ) {
    await dbConnect();
  let category

    try {
      category = await Category.findByIdAndDelete(params.id);

        return NextResponse.json(  category, {status : 200})
    } catch (err) {
        const category = await Category.findByIdAndDelete(params.id);

        return NextResponse.json(  {message : "Başarısız"}, {status : 406})
    }

}


