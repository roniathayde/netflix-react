import LogoMini  from '../../assets/images/netflixlogo mini.png'
import NomeFilm from '../../assets/images/Logo film default.png'
import Top10 from '../../assets/images/Top10.png'
import Play from '../../assets/images/Polygon play.png'
import Info  from '../../assets/images/Info btn.png'
import MainBG  from '../../assets/images/Main Show BG.jpg'

import Card  from '../../assets/images/Card.png'
import Card1  from '../../assets/images/Card-1.png'
import Card2  from '../../assets/images/Card-2.png'
import Card3  from '../../assets/images/Card-3.png'
import Card4  from '../../assets/images/Card-4.png'
import Card5  from '../../assets/images/Card-5.png'
import Card6  from '../../assets/images/Card-6.png'

import './styles.carousel.css'

import Carousel from 'react-elastic-carousel'


import {InfoWrapper, ItemCarrousel, WrapperCarrousel}  from './styles.home.js'
import {Main}  from './styles.home.js'
import { Plus } from 'lucide-react'
 
export const Home = () => {
const breakPoints = [
  { width: 700, itemsToShow: 1 },
  { width: 900, itemsToShow: 2 },
  { width: 1220, itemsToShow: 4 },
  { width: 1300, itemsToShow: 6 }
]

  return (
    <Main bg={MainBG}>

      {/* infos film principal */}
      <InfoWrapper>
        {/* categoria */}
        <div>
          <img src={LogoMini} alt="" />
          <h3>Series</h3>
          
        </div>
        {/* nome do filme */}
        <img src={NomeFilm} alt="" />
        <h4 className='mobile'>TV Mysteries º Based on Books</h4>
        {/* infos do filme */}
        <div>
          <header className='desktop'>
            <img src={Top10} alt="" />
            <p>#1 in TV Shows Today</p>
          </header>

          <p  className='desktop'> 
          Determined to protect a young patient who escaped a mysterious
cult, a psychiatrist takes the girl in, putting her own family — and
life — in danger.
          </p>

          <footer>
            <div className='mobile'>
              <Plus />
              My List
            </div>

            <button>
              <img src={Play} alt="" />
              Play
            </button>

            <button>
              <img src={Info} alt="" />
              <span className='desktop'>More Info</span>
              <span className='mobile'>Info</span>
            </button>
          </footer>
        </div>

      </InfoWrapper>

      {/* carroussel films */}
      <WrapperCarrousel>
        <h3>Popular on Netflix</h3>
        <Carousel breakPoints={breakPoints} pagination={false} itemsToShow={6} showArrows={false} >
          <ItemCarrousel bg={Card}> </ItemCarrousel>
          <ItemCarrousel bg={Card1}> </ItemCarrousel>
          <ItemCarrousel bg={Card2}> </ItemCarrousel>
          <ItemCarrousel bg={Card3}> </ItemCarrousel>
          <ItemCarrousel bg={Card4}> </ItemCarrousel>
          <ItemCarrousel bg={Card5}> </ItemCarrousel>
          <ItemCarrousel bg={Card6}> </ItemCarrousel>
          <ItemCarrousel bg={Card1}> </ItemCarrousel>
          <ItemCarrousel bg={Card2}> </ItemCarrousel>
          <ItemCarrousel bg={Card3}> </ItemCarrousel>
          <ItemCarrousel bg={Card4}> </ItemCarrousel>
        </Carousel>
      </WrapperCarrousel>
    </Main>
  )
}