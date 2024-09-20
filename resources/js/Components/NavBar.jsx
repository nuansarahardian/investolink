import React from "react";
import Dropdown from "@/Components/Dropdown";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const StickyNavbar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mt-4 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-slate-700 place-items-center">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Beranda
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/invesment-map" className="flex items-center ">
                    Peta Investasi
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className="max-h-[768px]  max-w-screen">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900 sm:mx-20 mx-2">
                    <div className="flex place-items-center">
                        {" "}
                        <img
                            src="images/KEMLU RI.png"
                            alt=""
                            className="sm:w-10 sm:h-10 mr-4 h-8 w-8"
                        />
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-medium text-slate-800"
                        >
                            <span className="font-bold -mr-1 sm:text-xl text-md">
                                {" "}
                                INVESTO
                            </span>
                            <span className="font-light sm:text-xl text-md">
                                {" "}
                                LINK
                            </span>
                        </Typography>
                    </div>

                    <div className="flex items-center sm:gap-3 gap-1">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Dropdown />
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block text-slate-100 bg-slate-800 sm:h-10 rounded-md"
                            >
                                <span>Sign in</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-10 w-10 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden  place-items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 flex"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6 text-slate-700"
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
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1 place-items-center">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
};

export default StickyNavbar;