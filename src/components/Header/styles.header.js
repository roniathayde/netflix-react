import { styled } from 'styled-components'

const HeaderTag = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  width: 100%;
  padding: 8px ;
  background-color: #00000007;

  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 28px;
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
      &:hover{
        text-decoration: underline;
      }
    }
  }
`

export default HeaderTag;