import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap'); 
     @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@0&display=swap');
 :root {

 }
 *{
    box-sizing: border-box;
 }
 html {
    font-size: 62.5%;
 }
 body{
    font-family: 'Montserrat',Arial,Helvetica,sans-serif;
    font-size:1.6rem;
    line-height:1.5;
    text-rendering: optimizespeed;
 }
`;
