import React from "react";
import Layout from "./components/Layout";
import Display from "./components/Display";
export default function App(){
  const [variable,setVariable]=React.useState(4)
  function addition(num1,num2){
    return num1+num2
  }
  function substraction(num1,num2){
    return num1-num2
  }
  function division(num1,num2){
    return num1/num2
  }
  function multiplication(num1,num2){
    return num1*num2
  }
    return (
      <>
      <Display
      variable={variable}/>
      <Layout
      setVariable={setVariable}
      addition={addition}
      substraction={substraction}
      division={division}
      multiplication={multiplication}
      />
      </>
  
    )
}
