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
      {console.log(">>>>>gets here",props.NavRouter)}
         ``

          <div style={{position:"relative"}}>
         <div id="apiDocs">
        <div className="navRoutesLogo">
        <nav className="nav-route-id">
        
          
            <span>
            {locat === '/dashboard/merchants' || locat === '/dashboard/merchants' ?'Add Merchant':""}
              {locat === '/reviews' || locat === '/Reviews' ?'Reviews':""}
              {locat === '/cupons'?'Coupon':""}
              {locat === '/merchants_overview'?'Overview':""}
              {locat === '/create_cupons'?'Coupon':""}
              {locat === '/view_cupon'?'Rx Pharmacy 30% Cashback Coupon':""}
              {locat === '/edit_cupon'?'Rx Pharmacy 30% Cashback Coupon':""}
              {locat === '/users_overview'?'Overview':""}
              {locat === '/edit_cupon'?   <button
              style={{
                
background: "rgba(45, 78, 245, 0.15)",
borderRadius: "3px",
padding:"10px 30px 10px 30px",
marginLeft:"10px",
fontSize:"15px",
color:" #2D4EF5"
              }}
              >Edit</button>:""}
            </span>
            <span>
              {locat === '/create_cupons'?'Create Coupon':""}
            </span>
            {locat === '/merchants_overview'?<span>Merchants</span>:""}
            {locat === '/users_overview'?<span>Users</span>:""}
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
