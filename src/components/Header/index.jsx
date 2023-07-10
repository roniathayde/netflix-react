import { Bell, Cast, ChevronDown, Search } from "lucide-react"
import HeaderTag  from "./styles.header"

import { NavLink } from 'react-router-dom'



import LogoNetflix from '../../assets/images/NetflixLogo.png'
import LogoMini from '../../assets/images/netflixlogo mini.png'


export const Header = () => {
  return (
    <HeaderTag>

      <div>
        <img className="desktop" src={LogoNetflix} alt="" />
        <img className="mobile" src={LogoMini} alt="" />

        <nav>
          
          <NavLink className="desktop" to="/">Home</NavLink>
          <NavLink className="desktop" to="/tvshows" >Tv Shows</NavLink>
          <NavLink className="desktop" to="/movies">Movies</NavLink>
          <NavLink className="desktop" to="/newandpopular">New & Popular</NavLink>
          <NavLink className="desktop" to="/mylist">My List</NavLink>
          <NavLink className="desktop" to="/browsebylanguage">Browse by Languages</NavLink>

        </nav>
      </div>
      {/* nav desk */}
      <div>
        <Search  className="desktop"/>
        <NavLink className="desktop" to="/kids">Kids</NavLink>
        <Bell  className="desktop"/>
        {/* User */}
        <div>
          <Cast className="mobile" />
          <div>
            {/* box gray */}
          </div>
          <ChevronDown className="desktop" />
        </div>
      </div>
      {/* nav mobile */}
      <div className="mobile">
        <nav>
            <NavLink to="/tvshows" >Tv Shows</NavLink>
            <NavLink to="/Movies" >Movies</NavLink>
            <div  to="/tvshows" >Categories</div>
        </nav>
      </div>

    </HeaderTag>
      
    
  )
}