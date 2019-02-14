import React from 'react';
import {Layout} from '../Layout/layout'

export default function Admin(props) {
    return (
        <div>
            <Layout NavRouter={props.location.pathname}>
                <h1>Admin Page</h1>
            </Layout>
        </div>
    )
}
