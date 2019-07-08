const name = 'John Doe'
const userAge = 27

const User = {
    name,
    age:userAge,
    address:'kolkata'
}

// console.log(User)

//Object Destucturing
const Product = {
    label:'Red book',
    price:3,
    stock:201,
    sale:undefined
}

const {label , stock , rating = 5} = Product
console.log(label , stock ,rating)


//Object Destructuring in Function
const transaction = ( type , {label , stock =0 } ={}) => {
    console.log(type , label , stock)
}

transaction('order')