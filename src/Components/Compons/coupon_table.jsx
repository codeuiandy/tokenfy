import React from 'react';
import {useTable} from 'react-table';

export default function Coupon_table() {
    const data = React.useMemo(() =>
        [
            {
                merchant:'RX Pharmacy',
                approvalID:'Adekunle Timilehin',
                type:'Cashback',
                Limits:178,
                Category:'Health & Finance',
                expiryDate:'20/10/2021',
                status:'Inactive'
            },
            {
                merchant:'Uber',
                approvalID:'Adekunle Timilehin',
                type:'Cashback',
                Limits:178,
                Category:'Travels',
                expiryDate:'20/10/2021',
                status:'Active'
            },
            {
                merchant:'Tastee',
                approvalID:'Alo Jeremiah',
                type:'Online',
                Limits:178,
                Category:'Dining & Takeout',
                expiryDate:'Not Stated',
                status:'Pending'
            },
            {
                merchant:'Jumia',
                approvalID:'Alo Jeremiah',
                type:'Cashback',
                Limits:178,
                Category:'Clothing',
                expiryDate:'Not Stated',
                status:'Pending'
            },
            {
                merchant:'Oando',
                approvalID:'Odeyemi Peace',
                type:'In-store',
                Limits:178,
                Category:'Travels',
                expiryDate:'20/10/2021',
                status:'Active'
            },
            {
                merchant:'Vaseline',
                approvalID:'Echecu Florish',
                type:'In-Store',
                Limits:178,
                Category:'Makeup & Skincare',
                expiryDate:'20/10/2021',
                status:'Active'
            },
            {
                merchant:'Coca-Cola',
                approvalID:'Abudu Benedict',
                type:'In-store',
                Limits:178,
                Category:'Makeup & Skincare',
                expiryDate:'20/10/2021',
                status:'Active'
            },
            {
                merchant:'Coca-Cola',
                approvalID:'Abudu Benedict',
                type:'In-store',
                Limits:178,
                Category:'Cashback Offers',
                expiryDate:'20/10/2021',
                status:'Active'
            },
            {
                merchant:'Coca-Cola',
                approvalID:'Echefu Flourish',
                type:'In-store',
                Limits:178,
                Category:'Cashback Offers',
                expiryDate:'20/10/2021',
                status:'Active'
            },
        ],
        []
    )
    const columns = React.useMemo(
        () => [
        {
            Header: 'Merchant',
            columns: [
                {
                    accessor:'merchant'
                }
            ],
        },
        {
            Header: 'Approved By',
            columns: [
                {
                accessor: 'approvalID',
                }
            ],
        },
        {
            Header:'Type',
            columns:[
                {
                    accessor:'type'
                }
            ]
        },
        {
            Header:'Limits',
            columns:[
                {
                    accessor:'Limits'
                }
            ]
        },
        {
            Header:'Category',
            columns:[
                {
                    accessor:"Category"
                }
            ]
        },
        {
            Header:'Expiring',
            columns: [
                {
                    accessor:"expiryDate"
                }
            ]
        },
        {
            Header:'Status',
            columns:[
                {
                    accessor:'status'
                }
            ]
        }
        ],
        []
       )
       const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
       } = useTable({ columns, data })
       return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
       )
}
