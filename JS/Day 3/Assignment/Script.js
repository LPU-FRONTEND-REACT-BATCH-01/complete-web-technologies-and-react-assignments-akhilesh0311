
async function  fetchData() {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        
        console.log(res);
        
        if(res.ok){
            let data = await res.json();
            console.log(data);
        }else{
            console.log("there is an HTTP Error")
        }
    } catch(error) {
        console.error("unable to fetch data");
    }
}   fetchData();