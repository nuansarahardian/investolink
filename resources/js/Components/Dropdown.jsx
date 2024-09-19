import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full place-items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    <div className="flex align-middle drop-shadow-md  rounded-xl mr-1">
                        <div className="">
                            <img
                                src="images/indo.png"
                                className="w-6 h-6 rounded-full"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className=" sm:text-sm sm:block hidden">
                        {" "}
                        Bahasa Indonesia
                    </div>

                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            <div className="flex place-items-center ">
                                <div className="w-10 my-auto rounded-full drop-shadow-lg">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src="images/indo.png"
                                        alt=""
                                    />
                                </div>
                                Bahasa Indonesia
                            </div>
                        </a>
                    </MenuItem>

                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                type="submit"
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                <div className="flex">
                                    <div className="w-10 rounded-full drop-shadow-lg">
                                        <img
                                            className="w-6 h-6 rounded-full"
                                            src="images/UK.png"
                                            alt=""
                                        />
                                    </div>
                                    English
                                </div>
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu>
    );
}
