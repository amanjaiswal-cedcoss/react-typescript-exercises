
import { hookObj, settings } from '../types'

function useConditions(settings:settings) {

  //function to check for required conditions as per task and return an object
  const check=(obj:hookObj)=>{
    const finalObj=obj;
    if(obj!==null){
      if(settings.titleIncludesTags===true && obj.tags!==undefined){
        finalObj.name=`${obj.name} ${obj.tags.join(',')}`
      }else{
        finalObj.name=obj.name;
      }
      if(obj.price===''){
        finalObj.price=settings.defaultPrice;
      }
      if(obj.stock===0 ){
        finalObj.stock=Number(settings.defaultStock);
      }
      if(obj.zipcode===0 || String(obj.zipcode)===''){
        finalObj.zipcode=settings.defaultZipcode
      }
      return finalObj
    }
  }

  return (check); 
}

export default useConditions