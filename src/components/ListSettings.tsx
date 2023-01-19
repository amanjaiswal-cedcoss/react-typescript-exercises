import React from 'react'
import { settings } from '../types'
interface IProps{
  settings:settings
}

function ListSettings(props:IProps) {
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
            <th scope="row">{props.settings.titleIncludesTags?'Yes':'No'}</th>
            <td className="shorttxt">{props.settings.defaultPrice}</td>
            <td>{props.settings.defaultStock}</td>
            <td className="shorttxt">{props.settings.defaultZipcode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ListSettings