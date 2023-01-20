export interface StudentProps{
    name : string
    age : number
    qualified : boolean
    gender : 'male' | 'female'
}

export interface book{
    id:number
    name:string
}

export interface student{
    id:number,
    email:string
}

export interface MarksProps{
    marks:number[]
    books:book[]
    getEmail:(id:number)=>void
    student:student
}

export interface product{
    name:string
    description:string
    price:string
    tags:string[]
    stock :number
}

export interface order{
    customerName:string
    customerAddress:string
    zipcode:number
    products:product[]
    quantity:number
}

export interface settings{
    titleIncludesTags:boolean
    defaultPrice:string
    defaultStock:number
    defaultZipcode:number
}

export interface hookObj{
    name?:string
    tags?:string[]
    price?:string
    stock? :number
    zipcode?:number
}