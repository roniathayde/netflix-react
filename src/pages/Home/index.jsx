import LogoMini  from '../../assets/images/netflixlogo mini.png'
import NomeFilm from '../../assets/images/Logo film default.png'
import Top10 from '../../assets/images/Top10.png'
import Play from '../../assets/images/Polygon 1.jpg'
import Info  from '../../assets/images/Info btn.png'
import MainBG  from '../../assets/images/Main Show BG.jpg'

import {InfoWrapper}  from './styles.home.js'
import {Main}  from './styles.home.js'

export const Home = () => {
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

        {/* infos do filme */}
        <div>
          <header>
            <img src={Top10} alt="" />
            <p>#1 in TV Shows Today</p>
          </header>

          <p>
          Determined to protect a young patient who escaped a mysterious
cult, a psychiatrist takes the girl in, putting her own family — and
life — in danger.
          </p>

          <footer>
            <button>
              <img src={Play} alt="" />
              Play
            </button>

            <button>
              <img src={Info} alt="" />
              More Info
            </button>
          </footer>
        </div>

      </InfoWrapper>

      {/* carroussel films */}
    </Main>
  )
}