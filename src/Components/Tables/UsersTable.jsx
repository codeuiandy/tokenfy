import React from 'react'
import icons from './icons'
import MaterialTable, { Column } from 'material-table';
import {Link} from 'react-router-dom'
import { Paper } from '@material-ui/core';
export default function UsersTable(props) {
    return (
        <div>
             <MaterialTable
              components={{
                Container: props => <Paper {...props} elevation={0}/>
           }}
                 icons={icons}
                  options={{
                    exportButton: true
                  }}
                  columns={[
                    { title: 'User', field: 'user' },
                    { title: 'Email', field: 'email' },
                    { title: 'ID', field: 'id' },
                    { title: 'Phone number', field: 'phone' },
                    { title: 'Location', field: 'location' },
                    { title: 'Claims', field: 'claims' },
                  
                  ]}

            data={props.users?props.users.map((data)=>{
                console.log(data.id)
                return(
                {
                    user: <Link to="/user-details/" className="table-link">{`${data.firstName} ${data.lastName}`}</Link>,
                    email:data.email,
                    id:data.id,
                    phone:data.phone,
                    location:data.location === null ? "Not Found": data.location,
                    claims:data.totalCouponClaims === null ? "No claim" : data.totalCouponClaims

                    })
            }):[]} 
        
          title="All Users"
          

        />
        </div>
    )
}
