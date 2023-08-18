import Title from "@/components/ui/Title";
import {useEffect, useState} from "react";
import axios from "axios";

const Footer = () => {

    const [footer, setFooter] = useState([]);

    useEffect(() => {
        const getFooter = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/footer`);
                setFooter(res.data[0]);
            } catch (err) {
                console.log(err);
            }
        };
        getFooter();
    }, []);

    return (<div className={"bg-secondary text-white "}>
            <div className={"container mx-auto pt-16 pb-6"}>

                <div className={"flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6"}>

                    <div className={"md:flex-1"}>
                        <Title addClass={"text-[30px]"}>Contact Us</Title>

                        <div className={"flex flex-col gap-y-2 mt-4"}>
                            <a href={footer?.location} target="_blank" rel="noreferrer">
                                <i className={"fa fa-map-marker"}></i>
                                <span className={"inline-block ml-2"}>Location</span>
                            </a>
                        </div>


                        <a href={`tel:${footer?.phoneNumber}`}>
                            <div>

                            <i className={"fa fa-phone"}></i>
                            <span className="inline-block ml-2">
                                           Call +90 {footer?.phoneNumber}
                                          </span>
                        </div>

                        </a>

                        <a href={`mailto:${footer?.email}`}>
                            <div>

                            <i className={"fa fa-envelope"}></i>
                            <span className={"inline-block ml-2"}>demo@gmail.com</span>
                            </div>

                        </a>
                    </div>
                    <div className={"md:flex-1"}>
                        <Title addClass={"text-[38px]"}>Feane</Title>
                        <div className={"flex flex-col gap-y-2 mt-4"}>
                            <p className={"mt-4"}>
                                Besides, it encompasses lots of tech-savvy features and assets like a hero header with
                                slider, on hover effect, call to action button
                            </p>


                            <div className={"flex justify-center mt-5 gap-x-2 "}>
                                {footer?.socialMedia?.map((item) => (<a
                                        href={item?.link}
                                        className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
                                        key={item._id}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className={item.icon}></i>
                                    </a>))}
                            </div>
                        </div>
                    </div>
                    <div className={" md:flex-1"}>
                        <Title addClass={"text-[30px]"}>Opening Hours</Title>
                        <div className={"flex flex-col gap-y-2 mt-4"}>
                            <div>
                                <div>
                                  <span className="inline-block ml-2">
                  {footer?.openingHours?.day}
                </span>
                                </div>
                            </div>
                            <div>
                                <div>
 <span className="inline-block ml-2">
                  {footer?.openingHours?.hour}
                </span></div>
                            </div>

                        </div>
                    </div>
                </div>


                <p className={"text-center mt-10"}>© 2023 All Rights Reserved By Free Html Templates</p>

            </div>
        </div>)
}


export default Footer;
