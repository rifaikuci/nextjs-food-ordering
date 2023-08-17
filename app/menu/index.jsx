import MenuWrapper from "@/components/product/MenuWrapper";
import axios from "axios";
import {useEffect, useState} from "react";

const Index = () => {

    const [categoryList, setCategoryList] = useState([])
    const [productList, setProductList] = useState([])
    useEffect(() => {
        const delayedMethod = async () => {
            try {
                const category = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/categories`
                );
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
        <div className={"pt-10"}>
            <MenuWrapper categoryList={categoryList} productList={productList} />
        </div>
    )
}

export default Index;
