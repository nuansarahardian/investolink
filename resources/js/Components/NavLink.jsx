import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    const baseClass =
        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-normal leading-5 transition duration-150 ease-in-out focus:outline-none";
    const activeClass = "border-yellow-400 text-white focus:border-indigo-700";
    const inactiveClass =
        "border-transparent text-white/70 hover:text-gray-100 hover:border-yellow-400/50 focus:text-gray-700 focus:border-gray-300";

    return (
        <Link
            {...props}
            className={`${baseClass} ${
                active ? activeClass : inactiveClass
            } ${className}`}
        >
            {children}
        </Link>
    );
}
