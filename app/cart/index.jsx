import Image from "next/image";
import Title from "@/components/ui/Title";
import {useDispatch, useSelector} from "react-redux";
import {reset} from "@/redux/cartSlice";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import {toast} from "react-toastify";

const Index = () => {

    const dispatch = useDispatch();
    const cart = useSelector((state)  => state.cart);
    const { data: session } = useSession();
    const [userList, setUserList]  = useState([]);


    const router = useRouter();
    const [user,setUser] = useState(null);

    useEffect(() => {
        const delayedMethod = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);

                setUserList(res.data ? res.data : []);
                setUser(res.data?.find((user) => user.email === session?.user?.email));

            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(delayedMethod, 500);
        return () => {
            clearTimeout(timer);
        };
    },[]); // Bo

    const newOrder = {
        customer: user?.fullName,
        address: user?.address ? user?.address : "No address",
        total: cart.total,
        method: 0,
    };

    const createOrder = async () => {
        try {
            if (session) {
                if (confirm("Are you sure to order?")) {
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
                        newOrder
                    );
                    if (res.status === 200) {
                        router.push(`/order/${res.data._id}`);
                        dispatch(reset());
                        toast.success("Order created successfully", {
                            autoClose: 1000,
                        });
                    }
                }
            } else {
                toast.error("Please login first.", {
                    autoClose: 1000,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="min-h-[calc(100vh_-_433px)]">
            <div className="flex justify-between items-center md:flex-row flex-col">
                <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
                    <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                PRODUCT
                            </th>
                            <th scope="col" className="py-3 px-6">
                                EXTRAS
                            </th>
                            <th scope="col" className="py-3 px-6">
                                PRICE
                            </th>
                            <th scope="col" className="py-3 px-6">
                                QUANTITY
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.products.map((product, index) => (
                                <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary " key={index}>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                                        <Image src={product?.img} alt="" width={50} height={50} priority />
                                        <span>{product.name}</span>
                                    </td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                            {product.extras.map((item ) => (
                                                <span key={item.id}>{item.text}, </span>
                                            )) }
                                    </td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                        ${product.price}
                                    </td>
                                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                                        {product.quantity}
                                    </td>
                                </tr>

                            ))
                        }
                        </tbody>
                    </table>
                </div>
                <div
                    className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 md:w-auto w-full md:text-start !text-center">
                    <Title addClass="text-[40px]">CART TOTAL</Title>

                    <div className="mt-6">
                        <b>Subtotal: </b>${cart.total} <br/>
                        <b className=" inline-block my-1">Discount: </b>$0.00 <br/>
                        <b>Total: </b>${cart.total}
                    </div>

                    <div>
                        <button className="btn-primary mt-4 md:w-auto w-52" onClick={createOrder} >
                            CHECKOUT NOW!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
