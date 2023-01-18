import React from "react";

function ListProducts() {
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
  );
}

export default ListProducts;
