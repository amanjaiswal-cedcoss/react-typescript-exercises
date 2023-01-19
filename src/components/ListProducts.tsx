import React from "react";
import { product } from "../types";
interface IProps{
  products:product[]
}

function ListProducts(props:IProps) {
  return (
    <div className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0">
      <h4>Products</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'>Tags</th>
            <th scope='col'>Stock</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(ele=>{
            return <tr>
            <th scope="row">{ele.name}</th>
            <td className="shorttxt">{ele.description}</td>
            <td>{ele.price}</td>
            <td className="shorttxt">{ele.tags.map(item=>{return item+','})}</td>
            <td>{ele.stock}</td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts;
