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
  & > div:last-child{
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
`

export default HeaderTag;