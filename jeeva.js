let UsersUI  = document.querySelector(".UsersUI")
let maleBtn = document.querySelector(".maleBtn")
// let dummy = []
window.addEventListener("DOMContentLoaded",()=>{
    fetch('https://randomuser.me/api?results=20')
    .then(res => res.json())//raw data to JSON
    .then(data =>{

        for(let i=0;i<data.results.length;i++){

            let mainDiv = document.createElement("div")
            mainDiv.setAttribute("class","mndiv")
            UsersUI.append(mainDiv)

            let img = document.createElement("img")
            img.setAttribute("id","imgs")
            img.src = data.results[i].picture.large
            mainDiv.append(img)

            let a = document.createElement("a")
            a.href = `./user.html?id=${data.results[i].id.value}`
            mainDiv.append(a)

            let name = document.createElement("li")
            name.setAttribute("id","name")
            name.innerText = `${data.results[i].name.first}  ${data.results[i].name.last}`
            a.append(name)            
        }
    }) // JSON to js object
    .catch(()=>console.log("Network error"))
})