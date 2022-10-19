import React from "react";
import logo from "../../assets/logo-light.svg"

export function Header() {
    return (
        <nav className="flex justify-center px-8 p-3 mb-5 items-center sticky top-0 bg-gray-800 w-full drop-shadow-md">
            <img src={logo} alt="Kanban Logo" className="h-fit"/>
        </nav>
    )
}