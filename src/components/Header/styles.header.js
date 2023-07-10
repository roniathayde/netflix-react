import { styled } from 'styled-components'

const HeaderTag = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 8px 72px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 35px, rgba(20, 20, 20, 0) 59px);
  z-index: 5;

  .mobile {
    display:none;
  }

  & > div:first-child {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;

    & img{
      width: 110px;
    }

    nav{ 
      display: flex;
      gap: 28px;
      font-size: 1.8rem;
    }

    & a{
      transition: all 0.3s ease-in-out;
      &::after{
        display: block;
        content: '';
        width: 0;
        height: 2px;
        background-color: #DADADA ;
        transition: all 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
      
      &.active{
        color: #fff;
        font-weight: 600;
      }
      color: #DADADA;
      text-decoration: none; 
      &:hover{
        color: #fff;
      }
    }
  }
  & > div:nth-child(2){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #DADADA;
    gap: 32px;

    & > div{
      display:flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    & > div div{
      width: 48px;
      height: 48px;
      border-radius:5px;
      background-color: #D9D9D9;
    }
    & a{
      color: inherit;
      text-decoration: none;
      font-size: 1.8rem;
      transition: all 0.3s ease-in-out;
      &::after{
        display: block;
        content: '';
        width: 0;
        height: 2px;
        background-color: #DADADA ;
        transition: all 0.3s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
      &.active{
        color: #fff;
        font-weight: 600;
      }
      &:hover{
        color: #fff;
      }
    }
  }

  @media (max-width: 1200px) {
    &{
      padding: 8px 28px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      
    }
    &>div:first-child{
      justify-content: flex-start;
    }
    &>div:nth-child(2){
      justify-content: flex-end;
    }
    &>div:nth-child(3){
      grid-column: span 2;
    }
    &>div:nth-child(3){
      margin-top: 12px;
      grid-column: span 2;
      justify-content: center;
    }
    &>div:nth-child(3) nav{
      width: 80%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /* asdasdasdas */
      & a, & div{
      transition: all 0.3s ease-in-out;
      color: #DADADA;
      text-decoration: none; 

      &.active{
        color: #fff;
        font-weight: 600;
      }
      
    }
    }
    

    &>div:nth-child(2)>div div{
      width: 34px !important;
      height: 34px !important;
    }

    & > div:nth-child(2)  svg:first-child{
      width: 34px;
      height: 34px;
      margin-right: 14px;
    }
    .desktop{
      display: none;
    }

    .mobile {
      display: flex;
    }
    &>div:first-child img.mobile{
      width: 24px;
      height: auto;
    }
  }
  /* &>div{

  } */
`

export default HeaderTag;