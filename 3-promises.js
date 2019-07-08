// Promises
// Compare with Callbacks 

const doWorkPromise = new Promise((resolve , reject) => {
    setTimeout(() => {
        //resolve([3,2,1])
        reject('This is a error!')
    } , 2000)
})


doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

