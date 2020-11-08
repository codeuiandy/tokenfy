import {atom } from 'recoil';

export const  toggleSidebar = atom({
  key: "toggleSidebar",
  default: {
    openSidebar:false,
    closeSidebar:true,
    defaultSidebarApiState:"initSidebarState"
  }
})


export const  modalControl = atom({
  key: "modalControl",
  default: {
      showoverlay:false,
    initState:"modalInitState",
    modalName:"",
    modalActons:""
  }
})

export const loader = atom({
  key: 'loading',
  default: {
    isLoading: false
  }
})


