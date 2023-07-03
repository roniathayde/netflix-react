import { styled } from 'styled-components'

const HeaderTag = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  
  width: 100%;
  padding: 8px ;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 35px, rgba(20, 20, 20, 0) 59px);
  
  & > div:first-child {
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;

    nav{ 
      display: flex;
      gap: 28px;
      font-size: 2.2rem;
    }
    
    & a{
      color: #DADADA;
      text-decoration: none; 
      &:hover{
        text-decoration: underline;
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
      font-size: 2.2rem;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`

export default HeaderTag;