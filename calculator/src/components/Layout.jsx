import React from "react";

export default function  Layout(props){
    
    return(
        <div className="grid grid-cols-4 grid-rows-5 w-1/3 mx-auto border-gray-400 border-t border-l text-2xl font-semibold">
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">AC</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">+/-</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center">%</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500">÷</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center " onClick={()=>props.setVariable(7)}>7</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center " onClick={()=>props.setVariable(8)}>8</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center " onClick={()=>props.setVariable(9)}>9</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500">X</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">4</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">5</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">6</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500">-</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">1</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">2</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">3</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500">+</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center col-span-2">0</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center ">.</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500">=</button>
        </div> 
    )
}