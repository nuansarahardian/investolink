import React from "react";
import InputLabel from "@/Components/InputLabel";
import NavLink from "@/Components/NavLink";
import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavBar from "@/Components/NavBar";

const Homepage = () => {
    return (
        <>
            {/* Inertia.js Head Component to set the page title */}
            <Head title="Homepage" />
            <NavBar />
            {/* Main Content */}
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Homepage</h1>

                {/* Example of a heading with Tailwind CSS class */}
                <h2 className="text-red-600 mb-4">nuansa ganteng 123</h2>

                {/* NavLink Component */}
                <NavLink
                    href="/dashboard"
                    className="text-blue-500 hover:underline"
                >
                    Go to Dashboard
                </NavLink>

                {/* InputLabel Component */}
                <div className="mt-4">
                    <InputLabel
                        value="Your Name"
                        className="block font-medium text-sm text-gray-700"
                    />
                    <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Enter your name"
                    />
                </div>
            </div>
        </>
    );
};

export default Homepage;
