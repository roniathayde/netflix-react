import MainLogo from '../../assets/images/Main Show BG.jpg'
const { styled } = require("styled-components");

export const Main = styled.main`
  & .desktop{
    display: flex;
  }
  & .mobile {
    display: none;
  }

  height: 100vh;
  background-image: url('${props=> props.bg}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding-top: 64px;
  filter: brightness(0.8);



  @media (max-width: 1200px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-color: black;
      background-size: auto;
      background-position: 68% -80px;
      gap: 22px;
    }
  }
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
  @media (max-width: 1200px) {
    & .desktop{
      display: none !important;
    }
    & .mobile {
    display: flex ;
    } 

    &{
      height: auto;
      margin-left: 0;
      align-items: center;
      width: 100%;
    }
    & div img {
      width: 100%;
      height: 100%;
      max-width: 16px;
      object-fit: contain;
    }
    & > img{
      width: 80%;
    }

    & h4{
      color: #FFFFFF;
      font-weight: 400;
      font-size: 1.8rem;
    }

    & > div:last-child{
      width: 90%;
    }

    & >div:first-child h3{
      font-size: 1.8rem;
      font-weight: 400;
    }
    & div:last-child footer{
      margin-block-start: 24px;
      justify-content: center;
    }
    & div:last-child footer button{
      font-size: 1.8rem;
      gap: 4px;
    }
    & div:last-child footer button:nth-child(2){
      width: 44%;
    }
    & div:last-child footer button:last-child{
      width: 100%;
      height: 100%;
      max-width: 38px ;
      max-height: 48px ;
      flex-direction: column;
      background-color: transparent;
      & img{
        width: 80px;
        height: 80px;
      }
    }
    & div:last-child footer div.mobile{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
    }
  }
`
// styles from carousel
export const WrapperCarrousel = styled.div`
  margin-left: 72px; 
  height:28%;
  & h3{
    color: #fff;
  }

  @media (max-width: 1200px) {
    & .desktop{
      display: none !important;
    }
    & h3{
    font-weight: 400;
    margin-bottom: 4px;
    } 
    &{
      height: auto;
      margin-left: 0;
    }
  }
  `

// styles from carousel
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

