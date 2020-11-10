import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './reviews.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import ReviewList from './ReviewList';
export default function Reviews(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
            <div className="page-router-display">
                {/* <CuponsTable/> */}
                    <div className="page-roter-list">
                        <div>
                            <div className="hsd">
                                <span
                                onClick={(e)=>setActivePage("Review_Category_All")}
                                 className={`page-router-name 
                                ${activePage==="Review_Category_All"?"page-router-name-active":""}`}>
                                    All</span>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("Cashback")}}
                                 className={`page-router-name 
                                ${activePage==="Cashback"?"page-router-name-active":""}`}>
                                    Cashback</span>
                            </div>
                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("Online Deals")}}
                                 className={`page-router-name 
                                ${activePage==="Online Deals"?"page-router-name-active":""}`}>
                                    Online Deals</span>
                            </div>
                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("In-store")}}
                                 className={`page-router-name 
                                ${activePage==="In-store"?"page-router-name-active":""}`}>
                                    In-store</span>
                            </div>
                        </div>
                    </div>
                    <div className="pg-dimacation"></div>

                    </div>
                <CommentList />
                <CommentForm />

                {/* <CommentList  />
                <CommentForm /> */}
            </Layout>
        </div>
    )
}


