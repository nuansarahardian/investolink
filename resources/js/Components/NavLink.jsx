import { Link } from "@inertiajs/react";
// Tidak perlu `withTranslation` karena tidak ada terjemahan di sini
import { withTranslation } from "react-google-multi-lang";

const NavLink = ({ active = false, className = "", children, ...props }) => {
    const baseClass =
        "inline-flex items-center px-1 pt-1  text-sm font-normal leading-5 transition duration-150 ease-in-out focus:outline-none";
    const activeClass = " text-white font-bold ";
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
};

export default withTranslation(NavLink);
