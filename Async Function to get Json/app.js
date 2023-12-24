let List = document.querySelector("#list")
let button = document.querySelector("#btn")


const getDadJokes = async() => {
    const config = {headers: { Accept: 'application/json'}}
    const response = await axios.get("https://icanhazdadjoke.com/", config )
    const lst = document.createElement('li')
    lst.innerText = response.data.joke 
    List.append(lst)

}

button.addEventListener('click',getDadJokes)