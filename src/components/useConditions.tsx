import { useEffect, useState } from 'react'
import { hookObj, settings } from '../types'

function useConditions(settings:settings,obj:hookObj) {
  const [finalObj,setFinalObj]=useState<hookObj>(obj)

  useEffect(()=>{
    console.log('obj.price',obj.price,settings.defaultPrice)
    if(obj!==null){
      if(settings.titleIncludesTags===true){
        console.log('name true');
        finalObj.name=`${obj.name} ${obj.tags.join(',')}`
      }else{
        console.log('name false');
        finalObj.name=obj.name;
      }
      if(obj.price===''){
        finalObj.price=settings.defaultPrice;
      }
      if(obj.stock===0){
        finalObj.stock=settings.defaultStock;
      }
      if(obj.zipcode===0 || String(obj.zipcode)===''){
        finalObj.zipcode=settings.defaultZipcode
      }
    }
    setFinalObj({...finalObj})
  },[obj,settings])

  return (finalObj); 
}

export default useConditions