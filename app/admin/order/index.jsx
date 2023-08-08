import React from "react";
import Title from "@/components/ui/Title";
import Image from "next/image";


const Order = () => {

    return (
        <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
            <Title addClass="text-[40px]">Order</Title>

            <div className="overflow-x-auto w-full mt-5">
                <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                    <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Product
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Customer
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Total
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Payment
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            56459324.2..
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Emin başaya
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            $18
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Cash
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            Status
                        </td>
                        <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                            <button className={"btn-primary !bg-success"}>Next Stage</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export  default Order;
