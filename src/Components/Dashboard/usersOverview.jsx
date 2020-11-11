import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import User from '../Assets/user.png'
import SearchImg from '../Assets/search.png'
import download from '../Assets/download.png'
export default function ViewCupon(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());
    return (
        <div>
            <Layout  NavRouter={props.location.pathname}>

       
            <div className="tableAction76">
            <div style={{width:"243px"}} className="create-conpon-container">
                
<div style={{margin:"0"}} className="cupon-input-box">
        
        <div style={{width:"220px",height:"50px"}} className="inputbox-cupon">
            <select style={{paddingLeft:"20px",height:"50px"}}>
             <option value="">Active</option>
             <option value="">data</option>
             <option value="">data</option>
             </select>
             
        </div>

      
            </div>      
      </div>

    <button className="exportTable">
        Export <img style={{paddingLeft:"13px"}} src={download} alt=""/>
    </button>

    <div className="searchFiltert">
        <div>
            <input placeholder="Search User" type="text"/>
        <img src={SearchImg} alt=""/>
        </div>
        
    </div>
            </div>
            <div style={{marginTop:"17px"}} className="Table-sec"></div>
                    


                 

               
            
            </Layout>
        </div>
    )
}


