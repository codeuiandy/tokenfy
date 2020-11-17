import React from 'react'
import icons from './icons'
import MaterialTable, { Column } from 'material-table';
import { Paper } from '@material-ui/core';
import {Link} from 'react-router-dom'

export default function Coupons(props) {
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
                    { title: 'MERCHANTS', field: 'user' },
                    { title: 'APPROVED BY', field: 'email' },
                    { title: 'TYPE', field: 'id' },
                    { title: ' LIMITS', field: 'phone' },
                    { title: 'CATEGORY', field: 'location' },
                    { title: 'EXPIRING', field: 'location' },
                    { title: 'STATUS', field: 'location' },
                   
                  
                  ]}

            data={props.Merchants?props.Merchants.map((data)=>{
                console.log(data.id)
                return(
                {
                    user: data.merchantName,
                    email:data.email,
                    id:data.id,
                    phone:data.phoneNumber,
                    location:data.location === null ? "Not Found": data.location,
                    

                    })
            }):[]} 
        
          title="All Coupons"
          

        />
        </div>
    )
}
