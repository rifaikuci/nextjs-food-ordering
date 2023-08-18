
import {NextResponse} from "next/server";
import dbConnect from "@/util/dbConnect";
import Footer from "@/models/Footer";

export const config = {
    api: {
        bodyParser: true,
    },
};

export async function POST(req ) {
    await dbConnect();
    const body  =  await  req.json();

    try {
        const newFooter = await Footer.create(body);

        return  NextResponse.json(newFooter,
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
        const footers = await Footer.find();
        return  NextResponse.json(footers,
            {
                status : 200
            })
    } catch (err) {
        console.log(err);
    }
}


