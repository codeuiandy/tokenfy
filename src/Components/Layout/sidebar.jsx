import React,{useState, useEffect} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
import {Link} from 'react-router-dom';
import DashboardPNG from '../Assets/icons/dashboard.png';
import ArrowDownPNG from '../Assets/arrowDown.png';
import AdminsPNG from '../Assets/icons/admins.png';
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
              <ul className="ApisideDropdown">
                <li className="sidebar-logo">Tokenfy</li>
                {/* <li className="sidebarHeader-list"  
                    onClick={()=>{setDropdows({...toggleDropDowns,option1:!toggleDropDowns.option1})}}>
                  Home
                </li> */}
                <li className="sidebar-menu">
                  <div data-toggle="collapse" href="#dashboard-menu">
                    <span className="sidebar-icon-container"><img className="sidebar-icon" src={DashboardPNG} /></span>
                    <span className="sidebar-menu-title">Dashboard</span>
                    <span className="sidebar-icon-container"><img className="sidebar-icon" src={ArrowDownPNG} /></span>
                  </div>
                  <div className="collapse menu-item" id="dashboard-menu">
                    <li><Link to="/dashboard-overview">Overview</Link></li>
                    <li><Link to="#">Users</Link></li>
                    <li><Link to="#">Merchants</Link></li>
                  </div>
                </li>
                <li className="sidebar-menu">
                  <div data-toggle="collapse" href="#admin-menu">
                    <span className="sidebar-icon-container"><img className="sidebar-icon" src={AdminsPNG} /></span>
                    <span className="sidebar-menu-title">Admin</span>
                    <span className="sidebar-icon-container"><img className="sidebar-icon" src={ArrowDownPNG} /></span>
                  </div>
                  <div className="collapse menu-item" id="admin-menu">
                    <li><Link to="/admin-tasks">My Tasks</Link></li>
                    <li><Link to="/create-task">Create Task</Link></li>
                    <li><Link to="/admin-list">View Admins</Link></li>
                  </div>
                </li>

                <li className="sidebar-menu">
                  <Link to="/account-settings"><span className="sidebar-icon-container fa fa-cog"></span> Settings</Link>
                </li>
                <li className="sidebar-menu">
                  <Link to="/trash-list"><span className="sidebar-icon-container fa fa-trash"></span>Trash</Link>
                </li>
                <li className="sidebar-menu">
                  <Link to="#"><span className="sidebar-icon-container fa fa-sign-out"></span>Logout</Link>
                </li>
                {/* {
                  toggleDropDowns.option1===true?(<ul className="subSidbar-Details">
                  <li className="subSidbar-Details-child">work in progress</li>
                  <li className="subSidbar-Details-child">work in progress</li>
                  <li className="subSidbar-Details-child">work in progress</li>
                  </ul>):""
                } */}




              </ul>
          </Scrollbars>
        </div>

      </div>
    </React.Fragment>
  )
}
