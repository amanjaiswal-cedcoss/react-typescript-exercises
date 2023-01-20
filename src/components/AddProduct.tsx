import React, { useRef } from "react";
import { product, settings } from "../types";
import useConditions from "./useConditions";
interface IProps {
  products: product[];
  setProducts: React.Dispatch<React.SetStateAction<product[]>>;
  settings: settings;
}

function AddProduct(props: IProps) {

  const refName = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLTextAreaElement>(null);
  const refPrice = useRef<HTMLInputElement>(null);
  const refTags = useRef<HTMLInputElement>(null);
  const refStock = useRef<HTMLInputElement>(null);

  // useConditions hook is used to get a function for checking default values and inclusion of tags 
  const check=useConditions(props.settings)

    // function to add a product
  const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
    // checking for null values in current property of refs i.e. required in typescript
    if ( refName.current !== null && refDescription.current !== null && refPrice.current !== null && refTags.current !== null && refStock.current !== null) {
      // creating an array of all tags
      let tags = refTags.current.value.split(",");
      let obj={
        name:refName.current.value,
        price:refPrice.current.value,
        stock:parseInt(refStock.current.value),
        tags:tags,
        zipcode:0
      }
        // using check function get finalObj
      let finalObj=check(obj)
      let temp = props.products;
      if (finalObj !== undefined && finalObj.name!==undefined && finalObj.stock!==undefined && finalObj.price!==undefined) {
        let obj = {
          name: finalObj.name,
          description: refDescription.current.value,
          price: finalObj.price,
          tags: tags,
          stock: finalObj.stock,
        };
        temp.push(obj);
        props.setProducts([...temp]);
        e.currentTarget.reset();
      }
    }
  };

  return (
    <form
      className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0"
      onSubmit={(e) => {
        e.preventDefault();
        addProduct(e);
      }}
    >
      <h4>Add Product</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          required
          ref={refName}
          type="text"
          className="form-control"
          id="name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          required
          ref={refDescription}
          className="form-control"
          id="description"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          ref={refPrice}
          type="text"
          className="form-control"
          id="price"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tags (separated by ',')</label>
        <input
          required
          ref={refTags}
          type="text"
          className="form-control"
          id="tags"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input
          ref={refStock}
          type="number"
          min={1}
          minLength={1}
          defaultValue={1}
          className="form-control"
          id="stock"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddProduct;
