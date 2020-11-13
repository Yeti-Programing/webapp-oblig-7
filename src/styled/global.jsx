import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
header {
    color: white;
  }
  
  body{
    background-color: #88c7dc;
  }
  
  nav{
    padding: 5px;
    border-top: solid;
    border-bottom: solid;
    color: white;
  }
  
  a{
    margin-right: 5px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
  
  a:link, a:visited {
    background-color: #7ecfd4;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-color: #3c89d0;
    border: solid;
  }
  
  a:hover, a:active {
    background-color: #3c89d0;
  }
  
  footer{
    position: absolute;
    width: 100%;
    bottom: 0px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-top: solid;
    border-color: white;
    color: white;
  }
  
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 50vh;
  }
  `;

export { GlobalStyles };