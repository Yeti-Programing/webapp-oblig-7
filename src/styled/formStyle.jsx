import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

export const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin-top: 5px;
    font-size: 16px;
    border-radius: 8px;
`

export const Form = styled.form`
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

const theme = {
    button: {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        marginTop: "5px",
        fontSize: "16px",
        borderRadius: "8px",
      },
      form: {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      },
      input: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      },
};

const Style = ({ children }) => (
    <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
)

export default Style;