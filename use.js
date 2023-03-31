
let user = document.querySelector(".userDetails")

let load = document.querySelector(".loading")


let ids = window.location.search;


window.addEventListener("DOMContentLoaded",()=>{
    fetch(`https://randomuser.me/api?results=20${ids}`)
    .then(res => res.json())
    .then(data => {

        load.style.display = "none"

        let createImg = document.createElement("img")
        createImg.setAttribute("id","userImg")
        createImg.src = data.results[0].picture.large
        user.append(createImg)
        
        let createName = document.createElement("li")
        createName.innerText = `Name : ${data.results[0].name.first}  ${data.results[0].name.last}`
        user.append(createName)

        let mainLi = document.createElement("li")
        mainLi.innerText = `Gender : ${data.results[0].gender}`
        user.append(mainLi)

        let DOB = document.createElement("li")
        DOB.innerText = `DOB : ${data.results[0].dob.date}`
        user.append(DOB)

        let Mail = document.createElement("li")
        Mail.innerText = `Email : ${data.results[0].email}`
        user.append(Mail)

        let street = document.createElement("li")
        street.innerText = `Street : ${data.results[0].location.street.name}`
        user.append(street)

        let phone = document.createElement("li")
        phone.innerText = `Phone : ${data.results[0].phone}`
        user.append(phone)

        
    })
})
