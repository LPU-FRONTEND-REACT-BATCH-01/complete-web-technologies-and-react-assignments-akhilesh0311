let users =[
    {
        id: 1,
        username: "john_doe",
        password: "password123",

    },

    {
        id: 2,
        username: "jane_smith",
        password: "securepass456",
    },

    {
        id: 3,
        username: "alice_wonder",       
        password: "alicepass789",
    }
]

let inputdata ={
    username: "john_doe",
    password: "securepass456",
}

let results =users.some(function(user){
    return user.username === inputdata.username && user.password === inputdata.password;
})

if(results){
    console.log("Login successful");
}else{
    console.log("Invalid username or password");
}   