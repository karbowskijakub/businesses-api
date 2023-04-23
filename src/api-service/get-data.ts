import React from "react";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
    },
};
const CORS_URL = "https://cors-anywhere.herokuapp.com/";
const BASE_API = "https://api.yelp.com";

const getData = (path: string, params?: Record<string, string>) => {
    const searchParams = new URLSearchParams(params);
    const url = new URL(`/v3${path}`, BASE_API);
    return fetch(
        `${CORS_URL}${url.toString()}?${searchParams.toString()}`,
        options
    ).then((res) => res.json());
};

export default getData;
