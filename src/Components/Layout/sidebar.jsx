import React,{useState, useEffect} from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
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

  <li className="sidebarHeader-list"  
  onClick={()=>{setDropdows({...toggleDropDowns,option1:!toggleDropDowns.option1})}}>
    Home</li>
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
