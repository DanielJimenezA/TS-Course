(()=>{
    
    interface Client {
        name:string,
        age?:number,
        address: {
            id:number,
            zip:string,
            city:string,
        }

    }
    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 123,
            zip: '123456',
            city: 'Santiago',
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 123,
            zip: '123456',
            city: 'Santiago',
        }
        
    }


})