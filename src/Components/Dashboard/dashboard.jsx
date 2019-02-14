import React,{useState} from 'react';
import {Layout} from '../Layout/layout'

export default function Dashboard(props) {
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <h1>Dashboard Page</h1>
            </Layout>
        </div>
    )
}
