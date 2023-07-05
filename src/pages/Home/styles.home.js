import MainLogo from '../../assets/images/Main Show BG.jpg'
const { styled } = require("styled-components");

export const Main = styled.main`
  height: 100vh;
  background-image: url('${props=> props.bg}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 64px;
  filter: brightness(0.8);
`

 export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 72px;
  height: 72% ;

  & > div:first-child{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  & > div:first-child h3{
    text-transform: uppercase;
    color: #dbdbdb;
    font-size: 2.4rem;
    letter-spacing: 8.2px;
    font-weight: 600;
    margin-left: 12px;
  }
  & > img {
    width: 100%;
    height: 100%;
    max-width: 575px;
    max-height:159px;
    object-fit: contain;
    
    
  }
  & > div:last-child header{
    display: flex;
    gap: 8px;
    color: #FFFFFF;
    align-items: center;
    margin: 39px 0; 
    
  }

  & > div:last-child header img{
    width: 38px;
    height: 38px;
  }

  & > div:last-child header p{
    font-size: 2.8rem;
  }
  & > div:last-child > p{
    font-size: 2.2rem;
    color: #FFFFFF;
    max-width: 630px;
    margin-bottom: 33px;
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
    font-size:2.8rem;
    font-weight: 600;
  }

  & > div:last-child footer button:first-child{
    background-color: #fff;
    border-radius: 5px;
    border: none;
    width: 159px;
    height: 60px;
  }
  & > div:last-child footer button:last-child{
    background-color: #515451;
    border-radius: 5px;
    border: none;
    color: #fff;
    width: 234px;
    height: 60px;
    font-weight: 400;
  }
  & > div:last-child footer button img{
    width: 27px;
    height: 34px;
    object-fit: contain;
  }
`

export const WrapperCarrousel = styled.div`
  margin-left: 72px; 
  height:28%;
`

export const ItemCarrousel = styled.div`
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-image: url('${props=> props.bg}');
`

