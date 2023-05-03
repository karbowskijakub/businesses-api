import React from "react";
import { MdBusiness } from "react-icons/md";

interface logoLink {
    name: string;
    icon: JSX.Element;
    path: string;
    id: number;
}

const data: logoLink[] = [
    {
        name: "Businesses-api",
        icon: <MdBusiness />,
        path: "/",
        id: 12,
    },
];

export default data;
