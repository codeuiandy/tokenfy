import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './dashboard.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowDown from '../Assets/arrowDown.png'
import calendar from '../Assets/calendar.png'
import {Link} from 'react-router-dom'
// import CuponsTable from '../Tables/customTable'
export default function Users(props) {
    const [activePage, setActivePage] = useState("Coupon_Properties")
    const [startDate, setstartDate] = useState(new Date())
    
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
              
                   
                <div className="Table-sec"></div>
                           

            </Layout>
        </div>
    )
}


