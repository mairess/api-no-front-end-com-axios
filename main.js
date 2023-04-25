const url = "http://localhost:5500/api" 

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

getUsers()

const newUser = {
    name: "Carlos Antônio",
    avatar: "https://picsum.photos/200/300",
    city: "Belem"
}

// addNewUser(newUser)

