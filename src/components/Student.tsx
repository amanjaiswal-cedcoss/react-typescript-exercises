import React from 'react'
import { StudentProps } from '../types'

function Student(props:StudentProps) {
  return (
    <div className='border border-dark m-2 card p-4 d-inline-block'>
        <h4 className='card-title'>Student Component</h4>
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Qualified:{props.qualified ? 'Yes':'No'}</p>
        <p>Gender:{props.gender}</p>
    </div>
  )
}

export default Student