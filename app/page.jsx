"use client";

import Index from "@/app/home";
import {useEffect, useState} from "react";
import axios from "axios";


export default function Home() {

    const [categoryList,setCategoryList] = useState([]);
    const [productList ,setProductList] = useState([]);

    useEffect(() => {
        const delayedMethod = async () => {
            try {
                const category = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

                const product = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );


                setCategoryList(category.data ? category.data : [])
                setProductList(product.data ? product.data : [])

            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(delayedMethod, 500);
        return () => {
            clearTimeout(timer);
        };
    }, []); // Bo

  return (
    <div >
        <Index  categoryList={categoryList} productList={productList} />

    </div>
  )
}


