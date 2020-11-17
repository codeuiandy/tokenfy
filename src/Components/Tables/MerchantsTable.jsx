import React from 'react'
import icons from './icons'
import MaterialTable, { Column } from 'material-table';
import {Link} from 'react-router-dom'
import { Paper } from '@material-ui/core';
export default function MerchantsTable(props) {
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
        
          title="All Merchants"
          

        />
        </div>
    )
}
