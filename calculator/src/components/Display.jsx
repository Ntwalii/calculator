import React from "react";


export default function Display(props){
    return (
        <div className="mx-auto mt-5 h-20 bg-gray-500 w-1/3 text-4xl font-semibold text-right p-5 text-white">{props.variable}</div>
    )
}