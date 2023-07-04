
import { Bell, ChevronDown, Search } from "lucide-react"
import HeaderTag  from "./styles.header"

import { NavLink } from 'react-router-dom'



import LogoNetflix from '../../assets/images/NetflixLogo.png'
export const Header = () => {
  return (
    <HeaderTag>

      <div>
        <img src={LogoNetflix} alt="" />

        <nav>
          
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tvshows" >Tv Shows</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/newandpopular">New & Popular</NavLink>
          <NavLink to="/mylist">My List</NavLink>
          <NavLink to="/browsebylanguage">Browse by Languages</NavLink>

        </nav>
      </div>

      <div>
        <Search />
        <NavLink to="/kids">Kids</NavLink>
        <Bell />
        {/* User */}
        <div>
          <div>
          </div>
          <ChevronDown />
        </div>
      </div>

    </HeaderTag>
      
    
  )
}