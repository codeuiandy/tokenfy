import React,{useState, useEffect} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {useRecoilState} from 'recoil';
import {toggleSidebar} from '../../globalState/localData';
import { Link } from 'react-router-dom';
export const Sidebar=()=> {
  let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
  let [toggleDropDowns, setDropdows] = useState({
    option1:false,
    option2:false,
    option3:false,
    option4:false,
    option5:false,
    option6:false,
    option7:false,
  })

  useEffect(() => {
    let search = window.location.search;
		let params = new URLSearchParams(search);
    let token = params.get("token");
    let id = params.get("id");
    localStorage.setItem('token', token)
    localStorage.setItem('_id', id)
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/'
  }

  return (
    <React.Fragment>
      <div id="apiDocsSidebar">
     
        <div className={`apiDocsIde ${sidebarState.openSidebar === true ?" apiDocsOpenSidebar" : sidebarState.defaultSidebarApiState}`}>
 <Scrollbars style={{ width:"100%", height: "100%"}}>
<ul className="ApisideDropdown" on>

  <li className="sidebarHeader-list icon-dashboard"  
  onClick={()=>{setDropdows({...toggleDropDowns,option1:!toggleDropDowns.option1})}}>
    Dashboard</li>
  {/* {
    toggleDropDowns.option1===true?(<ul className="subSidbar-Details">
     <li className="subSidbar-Details-child">work in progress</li>
     <li className="subSidbar-Details-child">work in progress</li>
     <li className="subSidbar-Details-child">work in progress</li>
    </ul>):""
  } */}

  <li className="sidebarHeader-list icon-coupons"><Link to="/cupons">Coupons</Link></li>
  <li className="sidebarHeader-list icon-review"><Link to="/reviews">Reviews</Link></li>
  <li className="sidebarHeader-list icon-admin">Admins</li>
  <li className="sidebarHeader-list icon-qr">QR Coupons</li>
  <hr />
  <li className="sidebarHeader-list icon-settings">Settings</li>
  <li className="sidebarHeader-list icon-trash">Trash</li>
  <li className="sidebarHeader-list icon-logout">Log Out</li>
</ul>
 </Scrollbars>
        </div>

      </div>
    </React.Fragment>
  )
}
