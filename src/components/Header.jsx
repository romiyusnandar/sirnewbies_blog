
import { useState } from 'react';
import images from './../constants/images';
import { BsListTask } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";

const navItemsInfo = [
    {name: "Home", type: "link"},
    {name: "Update", type: "link"},
    {name: "Pages", type: "dropdown", items: ["Custom ROM", "Custom Kernel", "Others"]},
    {name: "Donate", type: "link"},
    {name: "FAQ", type: "link"},
]

const NavItem = ({ item }) => {

    const [dropdown, setDropdown] = useState(false);

    const dropDownHandler = () => {
        setDropdown((curState) => {
            return !curState;
        });
    };

    return (
        <li className="relative group">
            {item.type === "link" ? (
                <>
                <a href="/" className="px-4 py-2">
                    {item.name}
                </a>
                <span className="cursor-pointer text-blue-600 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">/</span>
                </>
            ) : (
            <div  className="flex flex-col items-center">
            <button className="px-4 py-2 flex gap-x-1 items-center" onClick={dropDownHandler}>
                <span>{item.name}</span>
                <FaAngleDown />
            </button>
            <div className={`${dropdown ? "block" : "hidden"}
                lg:hidden trasition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
                <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
                    {item.items.map((page) => (
                        <a href="/" className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft">
                            {page}
                        </a>
                    ))}
                </ul>
            </div>
            </div> )}
            
        </li>
    )
};

const Header = () => {

    const [navIsVisible, setNavIsVisible] = useState(false);

    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };

    return (
        <section className="sticky top-0 left-0 right-0 z-50">
            <header className="container mx-auto px-5 flex justify-between py-4">
                <div>
                    {/* <img className="w-44" src={images.Logo} alt="" /> */}
                    <a href="/" className="text-2xl font-bold text-primary px-3">sirNewbies</a>
                </div>

                <div className="z-50 lg:hidden">
                    {navIsVisible ? (
                        <IoExitOutline className="w-6 h-6" onClick={navVisibilityHandler} 
                        />
                    ) : (
                        <BsListTask className="w-6 h-6" onClick={navVisibilityHandler} />
                    )}
                </div>

                <div className={`${
                        navIsVisible ? "right-0" : "-right-full"
                    } transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto lg:flex-row justify-center lg:justify-end fixed top-0 bottom-0 lg:static gap-x-9 items-center px-3`}>
                    <ul className="text-white lg:text-dark-soft items-center gap-y-4 flex flex-col lg:flex-row gap-x-2 font-semibold ">
                        {navItemsInfo.map((item) => (
                            <NavItem key={item.name} item={item}/>
                        ))}
                    </ul>

                    <button className="mt-5 lg:mt-0 border-2 border-blue-600 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                        Sign in
                    </button>
                </div>
            </header>
        </section>
    )
};

export default Header;