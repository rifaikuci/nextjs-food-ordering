import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import Footer from "@/models/Footer";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function GET(req ,{params}) {
    await dbConnect();
    let footer;
    try {
         footer = await Footer.findById(params.id);

        return NextResponse.json(  footer, {status : 200})
    } catch (err) {
        console.log(err);
    }


    return NextResponse.json(  footer, {status : 406})
}


export async function PUT(req,{params} ) {
    await dbConnect();
  let footer

    let body = await  req.json();
    console.log(<params className="id"></params>)
    try {
      footer = await Footer.findByIdAndUpdate(params.id, body, {
          new: true,
      });

        return NextResponse.json(  footer, {status : 200})
    } catch (err) {
        const footer = await Footer.findByIdAndDelete(params.id);

        return NextResponse.json(  {message : "Başarısız"}, {status : 406})
    }

}


