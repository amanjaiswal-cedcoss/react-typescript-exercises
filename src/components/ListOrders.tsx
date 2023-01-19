import React from 'react'
import { order } from '../types'

interface IProps{
  orders:order[]
}

function ListOrders(props:IProps) {
  return (
    <div className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0">
      <h4>Orders</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>Customer name</th>
            <th scope='col'>Customer address</th>
            <th scope='col'>Zip</th>
            <th scope='col'>Products</th>
            <th scope='col'>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map(ele=>{
            return  <tr key={JSON.stringify(ele)}>
            <th scope="row">{ele.customerName}</th>
            <td className="shorttxt">{ele.customerAddress}</td>
            <td>{ele.zipcode}</td>
            <td className="shorttxt">{ele.products.map(ele=><span key={ele.name}>{ele.name+','}</span>)}</td>
            <td>{ele.quantity}</td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListOrders