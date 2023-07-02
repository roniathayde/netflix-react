
import { Bell, ChevronDown, Search } from "lucide-react"
import HeaderTag  from "./styles.header"

import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <HeaderTag>

      <div>
        <svg width="139" height="39" viewBox="0 0 139 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_3_21)">
            <path d="M19.1129 35.7153C17.0219 36.0885 14.8942 36.2004 12.6931 36.4983L5.97958 16.5157V37.356C3.88861 37.5796 1.98102 37.8778 0 38.1761V0H5.57629L13.2066 21.6608V0H19.1129V35.7153ZM30.6688 13.9805C32.9434 13.9805 36.4285 13.8686 38.5194 13.8686V19.8335C35.9147 19.8335 32.87 19.8335 30.6688 19.9454V28.8185C34.1173 28.5949 37.5657 28.2963 41.0506 28.1845V33.9255L24.799 35.2306V0H41.0506V5.96502H30.6688V13.9805ZM62.8782 5.96516H56.7886V33.4042C54.8075 33.4042 52.8265 33.4042 50.9192 33.4785V5.96516H44.8295V0H62.8785L62.8782 5.96516ZM72.4163 13.5705H80.4505V19.5354H72.4163V33.0687H66.6563V0H83.0551V5.96502H72.4163V13.5705ZM92.5931 27.8491C95.9316 27.9235 99.3064 28.1849 102.572 28.371V34.2615C97.3257 33.9257 92.0796 33.5907 86.7236 33.4785V0H92.5931V27.8491ZM107.524 34.6716C109.395 34.7836 111.376 34.8955 113.284 35.1189V0H107.524V34.6716ZM139 0L131.553 18.1561L139 38.1761C136.799 37.8778 134.598 37.4677 132.396 37.0948L128.178 26.0598L123.886 36.2004C121.758 35.8272 119.704 35.7153 117.576 35.4171L125.133 17.9322L118.31 0H124.619L128.471 10.0287L132.58 0H139V0Z" fill="#E50914"/>
          </g>
          <defs>
            <clipPath id="clip0_3_21">
              <rect width="139" height="38.1761" fill="white"/>
            </clipPath>
          </defs>
        </svg>

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