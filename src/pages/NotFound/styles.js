import { styled } from "styled-components";


export const NotFoundWrapper = styled.section`
  background-color: #3d3d3d;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  gap: 42px;
  & div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    & a{
    color: #000;
    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    padding: 8px;
    text-align: center;
    font-weight: 600;
  }
  }
  
`