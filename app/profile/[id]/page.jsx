
"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import Account from "@/app/profile/Account";
import Password from "@/app/profile/Password";
import Order from "@/app/profile/Order";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import axios from "axios";

const Id = ({params}) => {

    const {data: session} = useSession();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const delayedMethod = async () => {

            try {
                let userTemp =  await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.id}`
                );
                setUser(userTemp ? userTemp.data : null )
            }
            catch (err) {
                console.log(params.id)
               // push("/auth/login")
            }
        };

        const timer = setTimeout(delayedMethod, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, []); // Bo

    const [tabs, setTabs] = useState(0);
    const {push} = useRouter();
    ;

    const handleSignOut = () => {
        if (confirm("Are you sure want to sign out")) {
            signOut({
                redirect: false
            });
            push("/auth/login");
        }
    }

    useEffect(() => {
        if (!session) {
            push("/auth/login");
        }
    }, [session, push])

    return (
        <div className={"flex px-10 min-h-[calc(100vh_-_433px)] lg:flex-row flex-col lg:mb-0 mb-10"}>
            <div className={"lg:w-80 w-100 flex-shrink-0"}>
                <div className={"relative flex flex-col items-center   py-5 px-10 border-2 border-b-0"}>
                    <Image      src={ user && user.image ? user.image : "/images/client2.jpg"}
                                alt={""} width={100} height={100} className={"rounded-full"}/>
                    <b className="text-2xl mt-1">{user && user.fullName}</b>
                </div>
                <ul className={"text-center font-semibold"}>
                    <li className={`${tabs === 0 ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
                        onClick={() => setTabs(0)}>
                        <i className={"fa fa-home"}></i>
                        <button className={"ml-1"}>Account</button>
                    </li>
                    <li className={`${tabs === 1 ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
                        onClick={() => setTabs(1)}>
                        <i className={"fa fa-key"}></i>

                        <button className={"ml-1"}>Password</button>
                    </li>
                    <li className={`${tabs === 2 ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
                        onClick={() => setTabs(2)}>
                        <i className={"fa fa-motorcycle"}></i>

                        <button className={"ml-1"}>Orders</button>
                    </li>
                    <li className={`${tabs === 3 ? 'bg-primary text-white' : ''} border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all`}
                        onClick={handleSignOut}>
                        <i className={"fa fa-sign-out"}></i>
                        <button className={"ml-1"}>Exit</button>
                    </li>
                </ul>

            </div>

            {tabs === 0 && <Account  user={user} />}
            {tabs === 1 && <Password user={user}/>}
            {tabs === 2 && <Order/>}
        </div>
    )
}

export default Id;
