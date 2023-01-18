import React from 'react'
interface IProps{
  addSettings:()=>void
}

function AddSetting(props:IProps) {
  return (
    <form className="border border-dark m-2 card p-4 d-inline-flex card shadow-sm border-0">
      <h4>Add Settings</h4>
      <div className="mb-3 d-flex">
        <label className="form-label me-2">Title includes tags</label>
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="titletags"/>
      </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Default Zipcode</label>
        <input type="number" className="form-control" id="defaultzipcode"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Default Price</label>
        <input type="number" className="form-control" id="defaultprice"/> 
      </div>
      <div className="mb-3">
        <label className="form-label">Default Stock</label>
        <input type="number" className="form-control" id="defaultstock"/> 
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddSetting