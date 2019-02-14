import React,{useState} from 'react';
import {useTable} from 'react-table';

export default function Coupon_table() {
    const data = React.useMemo(()=>{
    [
        {
        merchant:'Kim Parhish',
        approvalID:'Adekunle Timilehin',
        type:'Cashback',
        limits:'178',
        category:'Health & Finance',
        expiring:'20/10/2021',
        status:'Inactive'
        },
        {
        merchant:'Uber',
        approvalID:'Adekunle Timilehin',
        type:'Cashback',
        limits:'178',
        category:'Travels',
        expiring:'20/10/2021',
        status:'Active'
        },
        {
        merchant:'Tastee',
        approvalID:'Alo Jeremiah',
        type:'Online',
        limits:'178',
        category:'Dining & Takeout',
        expiring:'Not Stated',
        status:'Pending'
        },
        {
        merchant:'Jumia',
        approvalID:'Alo Jeremiah',
        type:'Online',
        limits:'178',
        category:'Clothing',
        expiring:'Not Stated',
        status:'Pending'
        },
        {
        merchant:'Oanda',
        approvalID:'Odeyemi Peace',
        type:'In-store',
        limits:'178',
        category:'Travels',
        expiring:'20/10/2021',
        status:'Active'
        },
        {
        merchant:'Echefu Flourish',
        approvalID:'Vaseline',
        type:'In-store',
        limits:'178',
        category:'Makeup & Skincare',
        expiring:'20/10/2021',
        status:'Active'
        },
        {
        merchant:'Kim Parhish',
        approvalID:'Adekunle Timilehin',
        type:'Cashback',
        limits:'178',
        category:'Health & Finance',
        expiring:'20/10/2021',
        status:'Inactive'
        }
    ]
    });
    const columns = React.useMemo(()=>{
        [
            {
                Header:'Merchant',
                columns:[
                    {
                        Header:'Merchant',
                        accessor:'merchant'       
                    }
                ]
            }
        ]
    });
    return (
        <div>
            
        </div>
    )
}
