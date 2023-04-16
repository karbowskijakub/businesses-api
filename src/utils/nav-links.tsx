import React from "react";
import { CiBurger } from "react-icons/ci";

interface logoLink {
    name: string;
    icon: JSX.Element;
    path: string;
    id: number;
}

const data: logoLink[] = [
    {
        name: "Restaurants-api",
        icon: <CiBurger />,
        path: "/",
        id: 12,
    },
];

export default data;
