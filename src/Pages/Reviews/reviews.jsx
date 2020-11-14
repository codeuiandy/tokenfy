import React,{useState} from 'react'
import {Layout} from '../../Components/Layout/layout'
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
            <Layout pageName="Reviews">
            
                <CommentList />
                <CommentForm />

                {/* <CommentList  />
                <CommentForm /> */}
            </Layout>
        </div>
    )
}


