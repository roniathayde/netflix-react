
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
          
          <NavLink>Home</NavLink>
          <NavLink>Tv Shows</NavLink>
          <NavLink>Movies</NavLink>
          <NavLink>New & Popular</NavLink>
          <NavLink>My List</NavLink>
          <NavLink>Browse by Languages</NavLink>

        </nav>
      </div>

      <div>
        <Search />
        <NavLink>Kids</NavLink>
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