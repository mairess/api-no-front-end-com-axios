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

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        
        userName.textContent = response.data.name
        userCity.textContent = response.data.city
        userID.textContent = response.data.id
        userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

getUsers()
getUser(2)

const newUser = {
    name: "Carlos Antônio",
    avatar: "https://picsum.photos/200/300",
    city: "Belem"
}

// addNewUser(newUser)

