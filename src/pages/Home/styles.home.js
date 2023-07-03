import MainLogo from '../../assets/images/Main Show BG.jpg'
const { styled } = require("styled-components");

export const Main = styled.main`
  height: 100vh;
  background-image: url('${props=> props.bg}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 64px;
`

 export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  & > div:first-child{
    display: flex;
    align-items: center;

  }
  & > div:first-child h3{
    text-transform: uppercase;
    color: #B9BBB9;
    font-size: 3.5rem;
  }
  & > img {
    width: 100%;
    height: 100%;
    max-width: 878px;
    
  }
  & > div:last-child header{
    display: flex;
    gap: 8px;
    color: #FFFFFF;
  }

  & > div:last-child header img{
    width: 44px;
    height: 44px;
  }

  & > div:last-child header p{
    font-size: 4.3rem;
  }
  & > div:last-child p{
    font-size: 3.0rem;
    color: #FFFFFF;
    max-width: 889px;
  }

  & > div:last-child footer{
    display: flex;
    gap: 20px;
  }

  & > div:last-child footer button{
    font-size: 4.0rem;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:4px;
    gap: 25px;
  }

  & > div:last-child footer button:first-child{
    background-color: #fff;
    border-radius: 5px;
    border: none;
    width: 208px;
    height: 77px;
  }
  & > div:last-child footer button:last-child{
    background-color: #515451;
    border-radius: 5px;
    border: none;
    color: #fff;
    width: 287px;
    height: 77px;
  }
  & > div:last-child footer button img{
    width: 49px;
    height: 51px;
  }
`