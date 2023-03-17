import React from 'react';
import './InputText.css';
import Form from "react-bootstrap/Form";

export const InputText = ({className, type, name, placeholder, required, changeFunction, blurFunction}) => {
  return (
    <>
      <Form.Control
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}

        onChange={(e)=>changeFunction(e)}
        onBlur={(e)=>blurFunction(e)}      
      />
    </>
  )
}