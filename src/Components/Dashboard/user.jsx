import React,{useState} from 'react';
import {Layout} from '../Layout/layout';

export default function User(props) {
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <h1>User</h1>
            </Layout>
        </div>
    )
}
