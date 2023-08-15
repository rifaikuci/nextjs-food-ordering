import Image from "next/image";
import {useEffect, useState} from "react";
import Order from "@/app/admin/order";
import Products from "@/components/admin/Products";
import Category from "@/app/admin/category";
import Footer from "@/app/admin/footer";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "react-toastify";

const Index = () => {

    const [tabs, setTabs ] =useState(0);

    const {push}  = useRouter();


    useEffect(() => {
        const delayedMethod = async () => {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/admin`
                );

                console.log(res.status)

                if(res.status === 406) {
                    push("/admin")
                }

            } catch (err) {
                push("/admin")
            }
        };

        const timer = setTimeout(delayedMethod, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []); // Bo

    const closeAdminAccount = async () => {
        try {
            if(confirm("Are you sure you want to close your admin account ?")) {
                const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
                console.log("denene", res)
                if (res.status === 200) {
                    push("/admin");
                    toast.success("Admin Account Closed");
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={"flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10"}>
            <div className={"lg:w-80 w-100 flex-shrink-0"}>
                <div className={"relative flex flex-col items-center   py-5 px-10 border-2 border-b-0"}>
                    <Image src={"/images/admin.png"} alt={""} width={100} height={100} className={"rounded-full"} />
                    <b className={"text-2xl mt-1"}> John Doe</b>
                </div>
                <ul className={"text-center font-semibold"}>
                    <li className={`${tabs === 0  ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all` }
                            onClick={()=> setTabs(0) }>
                        <i className={"fa fa-cutlery"}></i>
                        <button className={"ml-1"}>Products</button>
                    </li>
                    <li className={`${tabs === 1  ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all` }
                        onClick={()=> setTabs(1) }>
                        <i className={"fa fa-motorcycle"}></i>

                        <button className={"ml-1"}>Orders</button>
                    </li>

                    <li className={`${tabs === 2  ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all` }
                        onClick={()=> setTabs(2) }>
                        <i className={"fa fa-ellipsis-h"}></i>

                        <button className={"ml-1"}>Categories</button>
                    </li>

                    <li className={`${tabs === 3  ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all` }
                        onClick={()=> setTabs(3) }>
                        <i className={"fa fa-window-maximize"}></i>

                        <button className={"ml-1"}>Footers</button>
                    </li>


                    <li className={`${tabs === 4  ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all` }>
                        <i className={"fa fa-sign-out"}></i>
                        <button onClick={closeAdminAccount} className={"ml-1"}>Exit</button>
                    </li>
                </ul>

            </div>

            {tabs === 0 && <Products /> }
            {tabs === 1 && <Order /> }
            {tabs === 2 && <Category /> }
            {tabs === 3 && <Footer /> }
        </div>
    )
}



export default Index;
