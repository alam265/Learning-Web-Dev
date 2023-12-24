axios.get("https://swapi.dev/api/people/2/") 
 .then((res) => {
    console.log("RESPONSE ", res)
})
 .catch((err) => {
    console.log("ERROR! ", err)
 })