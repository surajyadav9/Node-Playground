

//Concept  =>  Arrow function dont bind their own this value , they access this value from the context in which they are created

//Eg.

const event = {
    name:"birthday party",
    guestList : ["Andrew" , "Jen" , "Mike"],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending "+ this.name)
        })
    }
}


event.printGuestList()