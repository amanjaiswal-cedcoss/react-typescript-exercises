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

