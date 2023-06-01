import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";

const AppBar = () => {
    return (
        <header className="flex gap-4 p-4 bg-gradient-to-b from-gray-500 to-gray-800 ">
            <Link className="transition-colors hover:text-blue-500" href={"/"}>1
                Home Page
            </Link>
            <Link className="transition-colors hover:text-blue-500" href={"/UserPost"}>
                User Post Page
            </Link>
            <SigninButton />
        </header>
    );
};

export default AppBar;