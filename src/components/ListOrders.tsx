import React from 'react'

function ListOrders() {
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
          <tr>
            <th scope="row">Iphone</th>
            <td className="shorttxt">Apple's smartphone with flagship features</td>
            <td>₹99,990</td>
            <td className="shorttxt">Apple,smartphone</td>
            <td>56</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListOrders