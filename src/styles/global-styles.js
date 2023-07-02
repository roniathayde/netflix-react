import { createGlobalStyle } from "styled-components";

  


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

*{
  margin: 0;
  padding:0 ;
  box-sizing: border-box;
 }
 html{
  font-size: 62.5%;
 }
 html, body{
  font-family: 'Inter' ,sans-serif;
  
 }
 body{
  font-size: 1.8rem;
 }
`