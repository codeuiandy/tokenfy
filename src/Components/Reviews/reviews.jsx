import React,{useState} from 'react'
import {Layout} from '../Layout/layout'
import './reviews.css'
import CommentForm from './CommentForm';
import CommentList from './CommentList'
// import CuponsTable from '../Tables/customTable'
export default function Reviews(props) {
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <div className="header">
                    <h2>Jumia 30% Cashback</h2>
                </div>
                <CommentList  />
                <CommentForm />
            </Layout>
        </div>
    )
}


