import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './reviews.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import ReviewList from './ReviewList';
import ReviewData from '../Tables/Review'

export default function ReviewTable(props) {
    const[activePage,setActivePage] = useState("Review_Category_All");
    const[startDate,setStartDate] = useState(new Date());

    return (
        <div>
            <Layout pageName="Reviews">
                <div style={{marginBottom:"20px"}}  style={{marginBottom:"20px"}} className="page-roter-list">
                        
                        <div>
                            <div className="hsd">
                                <span
                                style={{width:"25px"}}
                                onClick={(e)=>setActivePage("Coupon_Properties")}
                                 className={`page-router-name 
                                ${activePage==="Coupon_Properties"?"page-router-name-active ":""}`}>
                                    All</span><div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("cash-back")}}
                                 className={`page-router-name 
                                ${activePage==="cash-back"?"page-router-name-active ":""}`}>
                                   Cash back</span> <div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("onle-deal")}}
                                 className={`page-router-name 
                                ${activePage==="onle-deal"?"page-router-name-active ":""}`}>
                                  Online deals</span><div className="c-count-copon">200</div>
                            </div>

                            <div className="hsd">
                                <span
                                onClick={(e)=>{setActivePage("in-store")}}
                                 className={`page-router-name 
                                ${activePage==="in-store"?"page-router-name-active ":""}`}>
                                   In store</span><div className="c-count-copon">200</div>
                            </div>


                        </div>
                     
                    </div>

                  

                   

                
                <ReviewData viewReview={props.history.push}/>
            </Layout>
        </div>
    )
}


