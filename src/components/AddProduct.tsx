import React,{useRef} from 'react'
import { product } from '../types'
interface IProps{
  products:product[]
  setProducts:React.Dispatch<React.SetStateAction<product[]>>
}

function AddProduct(props:IProps) {
  const refName=useRef<HTMLInputElement>(null)
  const refDescription=useRef<HTMLTextAreaElement>(null)
  const refPrice=useRef<HTMLInputElement>(null)
  const refTags=useRef<HTMLInputElement>(null)
  const refStock=useRef<HTMLInputElement>(null)

  const addProduct=()=>{
    if(refName.current!==null && refDescription.current!==null && refPrice.current!==null && refTags.current!==null && refStock.current!==null){
      let tags=refTags.current.value.split(',')
      let obj={
        name:refName.current.value,
        description:refDescription.current.value,
        price:refPrice.current.value,
        tags:tags,
        stock:Number(refStock.current.value),
      }
      let temp=props.products;
      temp.push(obj)
      props.setProducts(temp)
    }
    
  }

  return (
    <form className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0" onSubmit={(e)=>{e.preventDefault();addProduct()}}>
      <h4>Add Product</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input ref={refName} type="text" className="form-control" id="name"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea ref={refDescription} className="form-control" id="description"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input ref={refPrice} type="number" className="form-control" id="price"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Tags (separated by ',')</label>
        <input ref={refTags} type="text" className="form-control" id="tags"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input ref={refStock} type="number" className="form-control" id="stock"/> 
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddProduct