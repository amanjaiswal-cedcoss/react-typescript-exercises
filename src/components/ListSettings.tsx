import React from 'react'

function ListSettings() {
  return (
    <div className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0">
      <h4>Settings</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>Title includes tags</th>
            <th scope='col'>Default Price</th>
            <th scope='col'>Default Stock</th>
            <th scope='col'>Default Zipcode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">No</th>
            <td className="shorttxt">00</td>
            <td>00</td>
            <td className="shorttxt">111111</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListSettings