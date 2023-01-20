import React, { useRef } from 'react'
import { order, product, settings } from '../types'
import useConditions from './useConditions'
interface IProps{
  products:product[]
  orders:order[]
  setOrders:React.Dispatch<React.SetStateAction<order[]>>
  settings:settings
}

function AddOrder(props:IProps) {

  const refCustName=useRef<HTMLInputElement>(null)
  const refCustAddress=useRef<HTMLTextAreaElement>(null)
  const refZipcode=useRef<HTMLInputElement>(null)
  const refProducts=useRef<HTMLSelectElement>(null)
  const refQuantity=useRef<HTMLInputElement>(null)

  const check = useConditions(props.settings);

  const addOrder=(e:React.FormEvent<HTMLFormElement>)=>{
    if(refCustName.current!==null && refCustAddress.current!==null && refZipcode.current!==null && refProducts.current!==null && refQuantity.current!==null){
      let tempArr:product[]=[]
      Array.from(refProducts.current.selectedOptions).forEach(ele=>{
        tempArr.push(props.products[Number(ele.value)])
      })
      if(tempArr.length===0){
        alert('select atleast one product')
        return
      }
      let obj={
        name:'',
        price:'',
        stock:0,
        tags:[],
        zipcode:Number(refZipcode.current.value)
      }
      let finalObj=check(obj)
      if(finalObj?.zipcode!==undefined){
        let order={
          customerName:refCustName.current.value,
          customerAddress:refCustAddress.current.value,
          zipcode:finalObj.zipcode,
          products:tempArr,
          quantity:Number(refQuantity.current.value),
        }
          let temp=props.orders
          temp.push(order)
          props.setOrders([...temp])
          e.currentTarget.reset()
      }
      }
     
    }
  

  return (
    <form className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0"  onSubmit={(e)=>{e.preventDefault();addOrder(e)}}>
      <h4>Add Order</h4>
      <div className="mb-3">
        <label className="form-label">Customer Name</label>
        <input required ref={refCustName} type="text" className="form-control" id="customername"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Customer Address</label>
        <textarea required  ref={refCustAddress} className="form-control" id="customeraddress"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Zipcode</label>
        <input ref={refZipcode} defaultValue={0} min={0} type="number" className="form-control" id="zipcode"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Products</label>
        <select ref={refProducts} className="form-select" multiple aria-label="multiple select example">
          <option disabled>-------Select Products------</option>
          {props.products.map((ele,i)=>{
            return <option key={i} value={i}>{ele.name}</option>
          })}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity</label>
        <input ref={refQuantity} required type="number" className="form-control" id="quantity"/> 
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddOrder