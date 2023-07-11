import { NotFoundWrapper } from "./styles"

import {NavLink} from 'react-router-dom'


import NetflixLogo from '../../assets/images/NetflixLogo.png'

export const NotFound = () => {
  return (
  <>
    <NotFoundWrapper>
      <img src={NetflixLogo} alt="" />
      <h1>Sorry path not found</h1>
      <div>
        <p>Try return to home</p>
        <NavLink to='/'>Home</NavLink>
      </div>
    </NotFoundWrapper>
  </>
      
    
  )
}