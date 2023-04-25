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

function updataUser(id, userUpdated){
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deletUser (id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
deletUser(1)


getUsers()
getUser(1)

const newUser = {
    name: "Carlos Antônio",
    avatar: "https://picsum.photos/200/300",
    city: "Belem"
}
// addNewUser(newUser)

const userUpdated = {
    name: "Fernando Xavier",
    avatar: "https://picsum.photos/200/300",
    city: "Fortaleza"
}
// updataUser(3, userUpdated)

