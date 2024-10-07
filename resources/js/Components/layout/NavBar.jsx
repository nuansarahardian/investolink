import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import SelectLanguage from "@/Components/common/SelectLanguage";
import { withTranslation } from "react-google-multi-lang";

import {
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const StickyNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { url, props } = usePage(); // Ambil props dari usePage
    const { auth } = props; // Ambil auth dari props

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navItems = [
        { href: "/", label: "Beranda" },
        { href: "/peta-investasi", label: "Peta Investasi" },
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
                            src="/images/KEMLU RI.png"
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
                        <SelectLanguage></SelectLanguage>
                        {auth.user ? ( // Periksa apakah user sudah login
                            <div className="relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-slate-800 hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        ) : (
                            <Link href={route("login")}>
                                <Button
                                    variant="gradient"
                                    size="md"
                                    className="hidden lg:inline-block text-slate-100 bg-slate-800 font-medium rounded-md"
                                >
                                    MASUK
                                </Button>
                            </Link>
                        )}

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
                    {auth.user ? (
                        <div className="p-4">
                            <Typography className="text-sm font-medium text-gray-700">
                                {auth.user.name}
                            </Typography>
                            <Button
                                fullWidth
                                variant="text"
                                size="sm"
                                onClick={() => route("logout")}
                                method="post"
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <Button fullWidth variant="text" size="sm">
                            Log In
                        </Button>
                    )}
                </Collapse>
            </div>
        </div>
    );
};

export default withTranslation(StickyNavbar);
