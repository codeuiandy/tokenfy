import React,{useState} from 'react';
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
