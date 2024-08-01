import React from "react";
import Layout from "./components/Layout";
import Display from "./components/Display";
export default function App(){
  const [variable,setVariable]=React.useState()
  const [answer,setAnswer]=React.useState(4)
  const [operation,setOperation]=React.useState()
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
      variable={variable}
      answer={answer}
      setAnswer={setAnswer}/>
      
      <Layout
      operation={operation}
      setOperation={setOperation}
      setVariable={setVariable}
      addition={addition}
      substraction={substraction}
      division={division}
      setAnswer={setAnswer}
      multiplication={multiplication}
      answer={answer}
      />
      </>
  
    )
}
