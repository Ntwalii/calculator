import React from "react";

export default function  Layout(props){
    
    function numSetter(num){
        props.setVariable(oldVariable=>{
            if(oldVariable===props.answer){
                props.setAnswer(num)
                return num
            }
            if(props.operation){
                const temp=props.operation(Number(oldVariable),Number(num))
                props.setAnswer(temp)
                console.log(props.answer)
                return num
            }
            else if(oldVariable){
                return Number(`${oldVariable}${num}`)
            }
            else{
                props.setAnswer(num)
                return num
            }
        })
        return props.setOperation()
    }

    return(
        <div className="grid grid-cols-4 grid-rows-5 w-1/3 mx-auto border-gray-400 border-t border-l text-2xl font-semibold">
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>props.setVariable("")}>AC</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>props.setVariable(oldVariable=>oldVariable*-1)}>+/-</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>props.setVariable(oldVariable=>oldVariable/100)}>%</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-centertext-white bg-orange-500" onClick={() => props.setOperation(() => props.division)} >÷</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(7)}>7</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(8)}>8</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(9)}>9</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500" onClick={() => props.setOperation(() => props.multiplication)}>X</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(4)}>4</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(5)}>5</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(6)}>6</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-centertext-white bg-orange-500" onClick={() => props.setOperation(() => props.substraction)}>-</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(1)}>1</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(2)}>2</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>numSetter(3)}>3</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-centertext-white bg-orange-500" onClick={() => props.setOperation(() => props.addition)}>+</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center col-span-2" onClick={()=>numSetter(0)}>0</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center" onClick={()=>props.setVariable(oldVariable=>parseFloat(`${oldVariable}.0`))}>.</button>
            <button className="hover:bg-gray-300 border-gray-400 border-r border-b py-10 px-8 text-center text-white bg-orange-500" onClick={()=>props.setVariable(props.answer)}>=</button>
        </div> 
    )
}