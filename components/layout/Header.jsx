
import {useState} from "react";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import Search from "@/components/ui/Search";
import {GiCancel, GiHamburgerMenu} from "react-icons/gi";
import {usePathname} from "next/navigation";

const Header = () => {

    const [isSearchModal, setIsSearchModal] = useState(false);
    const [isMenuModal, setIsMenuModal] = useState(false);

    const pathname = usePathname()
    return (
        <div>

            <div
                className={`h-[5.5rem] z-50 relative ${
                    pathname === "/" ? "bg-transparent" : "bg-secondary"
                }`}
            >
                <div className="container mx-auto text-white flex justify-between items-center h-full">

                    <Logo/>

                    <nav
                        className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
                            isMenuModal === true && "!grid place-content-center"
                        }`}>
                        <ul className={"flex gap-x-2 sm:flex-row flex-col items-center"}>
                            <li className={"px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"}>
                                <a href="">HOME</a>
                            </li>
                            <li className={"px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"}>
                                <a href="">MENU</a>
                            </li>
                            <li className={"px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"}>
                                <a href="">ABOUT</a>
                            </li>
                            <li className={"px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer"}>
                                <a href="">BOOK TABLE</a>
                            </li>
                        </ul>
                        {
                            isMenuModal && (
                                <button className={"absolute top-4 right-4 z-50"}
                                        onClick={() => setIsMenuModal(false)}>
                                    <GiCancel size={25} className={"transition-all"}/>
                                </button>
                            )
                        }
                    </nav>

                    <div className={"flex gap-x-4 items-center"}>
                        <a href="#">
                            <FaUserAlt className={"hover:text-primary transition-all"}/>
                        </a>

                        <a href="#">
                            <FaShoppingCart className={"hover:text-primary transition-all"}/>
                        </a>

                        <button onClick={() => {
                            setIsSearchModal(true)
                        }}>
                            <FaSearch className={"hover:text-primary transition-all"}/>
                        </button>

                        <a href={"#"} className={"md:inline-block hidden"}>
                            <button className={"btn-primary"}>Order Online</button>
                        </a>
                        <button className={"sm:hidden inline-block"} onClick={() => {
                            setIsMenuModal(true)
                        }}>
                            <GiHamburgerMenu className={"text-xl hover:text-primary transition-all"}/>
                        </button>
                    </div>
                </div>

            </div>
            {
                isSearchModal && <Search setIsSearchModal={setIsSearchModal}/>
            }
        </div>
    )
}


export default Header;
