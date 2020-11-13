import React from 'react'
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
import img1 from './img1.png'
import img2 from './img.png'
export const  Navbar=(props)=> {
  let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
  const locat = props.NavRouter
  return (
    <React.Fragment>

          <div style={{position:"relative"}}>
         <div id="apiDocs">
        <div className="navRoutesLogo">
        <nav className="nav-route-id">
            <span>
              {locat === '/reviews'?'Reviews':""}
              {locat === '/cupons'?'Coupon':""}
              {locat === '/create_cupons'?'Coupon':""}
              {locat === '/qrcoupons'?'QR Coupons':""}
              {locat === '/admin'?'Admins':""}
              {locat === '/user'?'Overview':""}
              {locat === '/merchants'?'Overview':""}
            </span>
            <span>
              {locat === '/cupons'?'Create Coupon':""}
              {locat === '/create_cupons'?'Create Coupon':""}
              {locat === '/qrcoupons'?'Create Coupons':""}
              {locat === '/user'?'Users':""}
              {locat === '/merchants'?'Merchants':""}
            </span>
          </nav>
         
        </div>

        <div className="routes-links">
          <ul>
            <li className="navbar-notifications">

            </li>
             <li className="user-name-pic">Okeke Andrew</li>
          <li className="user-profile-pic"></li>
          </ul>
         
        </div>
       
        <div className="navRoutesActions">
        <i style={{fontSize:"24px"}} onClick={()=>setSidebarState({...sidebarState,openSidebar:!sidebarState.openSidebar,
          defaultSidebarApiState:"apiDocsCloseSidebar"})} className="fas fa-bars"></i>
  
        </div>
      </div>
      </div>
      
      
     
    </React.Fragment>
  )
}

export default Navbar
