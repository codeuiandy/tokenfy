import React,{} from 'react'
import './index.css'
import './layout.css'
import {Navbar} from './navbar'
import {Sidebar} from './sidebar'
import {useRecoilState} from 'recoil'
import {toggleSidebar} from '../../globalState/localData'
export const Layout=(props)=> {
  let [sidebarState, setSidebarState] = useRecoilState(toggleSidebar)
  return (
    <div>
     <Navbar navbarContentSwitcher={props.navbarContentSwitcher} page={props.pageName}/>
     <Sidebar/>
     <div id="apiDocsWrap">
       <div onClick={()=>setSidebarState({...sidebarState, openSidebar:false})} className="generalPadding">
          {props.children}
       </div>
      
     </div>
    </div>
  )
}
