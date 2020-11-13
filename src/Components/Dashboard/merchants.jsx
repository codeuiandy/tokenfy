import React from 'react'
import { Layout } from '../Layout/layout'
import './dashboard.css'

export default function Merchants(props) {
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <h1>Merchant</h1>
            </Layout>
        </div>
    )
}
