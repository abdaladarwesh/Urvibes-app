import type { FC } from "react";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";


const ErrorPage : FC = () => {
    return (
        <div className="flex w-screen h-screen bg-gray-900">
        <Sidebar />
        <div className="flex justify-center items-center flex-1 flex-col gap-4">
            <h1 className="text-white text-7xl font-outfit">Error 404</h1>
            <p className="text-white font-outfit">The page You requested is not found</p>
            <p className="text-white font-outfit">Go to home <Link to={"/"} className="text-purple-800 underline">from here</Link></p>

        </div>
        </div>
    );
};

export default ErrorPage;