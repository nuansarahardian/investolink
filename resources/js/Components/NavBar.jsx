import React from "react";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import {
    Collapse,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const StickyNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { url } = usePage();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { href: "/", label: "Beranda" },
        { href: "/invesment-map", label: "Peta Investasi" },
    ];

    const navList = (
        <ul className="mt-4 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-slate-700">
            {navItems.map((item) => (
                <Typography as="li" key={item.href} className="p-1 font-normal">
                    <NavLink href={item.href} active={url === item.href}>
                        {item.label}
                    </NavLink>
                </Typography>
            ))}
        </ul>
    );

    return (
        <div className="max-h-[768px] max-w-screen">
            <div className="shadow-sm bg-gradient-to-r from-[#5E7ADD] to-[#2D3985] sticky top-0 z-10 rounded-none px-4 py-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900 sm:mx-20 mx-2">
                    <div className="flex items-center">
                        <img
                            src="images/KEMLU RI.png"
                            alt=""
                            className="mr-2 h-8 w-8 sm:w-10 sm:h-10"
                        />
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium text-white"
                        >
                            <span className="font-bold sm:text-xl text-md">
                                INVESTO
                            </span>
                            <span className="font-normal sm:text-xl text-md -ml-1">
                                {" "}
                                LINK
                            </span>
                        </Typography>
                        <div className="hidden lg:block">{navList}</div>
                    </div>
                    <div className="flex items-center sm:gap-3 gap-1">
                        <Dropdown />
                        <Button
                            variant="gradient"
                            size="md"
                            className="hidden lg:inline-block text-slate-100 bg-slate-800 font-medium rounded-md"
                        >
                            Masuk
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-10 w-10 text-inherit lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-slate-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-slate-700"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <Button fullWidth variant="text" size="sm">
                        Log In
                    </Button>
                </Collapse>
            </div>
        </div>
    );
};

export default StickyNavbar;
