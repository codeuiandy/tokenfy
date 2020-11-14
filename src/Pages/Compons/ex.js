import React from 'react'
import {Layout} from '../Layout/layout'
export default function Ex(props) {
    console.log(props.location.pathname)
    return (
        <Layout NavRouter={props.location.pathname}>
            <h1>hhhh</h1>
        </Layout>
    )
}
