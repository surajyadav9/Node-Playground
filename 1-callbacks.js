//For comparision with Promises

const doWorkCallbacks = (callback) => {

    setTimeout(()=>{

        //callback('This is an error!' , undefined)
        callback(undefined , [1,2,3])

    } , 2000)

}

doWorkCallbacks((error , result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})







//Asynchronous

// const add = (param1 , param2 , callback) =>{
//     setTimeout(()=>{
//         const data = param1 + param2
//         callback(data)
//     } , 2000)
// }

// add(1 , 4 , (sum) => console.log(sum))


