export interface signUp{
    name:string,
    email:string,
    password:string
}
export interface login{
    email:string,
    password:string
}
export interface Product{
    id:string,
    name:string,
    price:number,
    description:string,
    image:string
}

export interface Order{
    id:string,
    name:string,
    items: Map<Product, number>,
    price:number    
}
export interface Cart{
    userId:string,
    items: Map<string, number>;
}