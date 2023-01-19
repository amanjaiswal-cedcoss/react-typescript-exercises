import React, { useRef } from "react";
import { hookObj, product, settings } from "../types";
import useConditions from "./useConditions";
interface IProps {
  products: product[];
  setProducts: React.Dispatch<React.SetStateAction<product[]>>;
  settings: settings;
}

function AddProduct(props: IProps) {
  const product = useRef<hookObj>({ name: "", price: "", tags: [], stock: 0, zipcode: 0});

  const refName = useRef<HTMLInputElement>(null);
  const refDescription = useRef<HTMLTextAreaElement>(null);
  const refPrice = useRef<HTMLInputElement>(null);
  const refTags = useRef<HTMLInputElement>(null);
  const refStock = useRef<HTMLInputElement>(null);

  const finalObj = useConditions(props.settings, product.current);

  const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      refName.current !== null &&
      refDescription.current !== null &&
      refPrice.current !== null &&
      refTags.current !== null &&
      refStock.current !== null
    ) {
      let tags = refTags.current.value.split(",");
      product.current.name = refName.current.value;
      product.current.price = refPrice.current.value;
      product.current.stock = Number(refStock.current.value);
      let temp = props.products;
      if (finalObj !== undefined) {
        let obj = {
          name: finalObj.name,
          description: refDescription.current.value,
          price: finalObj.price,
          tags: tags,
          stock: finalObj.stock,
        };
        console.log(obj)
        temp.push(obj);
        props.setProducts([...temp]);
        // e.currentTarget.reset();
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
          type="number"
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
