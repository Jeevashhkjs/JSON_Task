let UsersUI = document.querySelector(".UsersUI")
let maleBtn = document.querySelector(".maleBtn")
let female = document.querySelector(".femaleBtn")

let search = document.querySelector("#search")
let load = document.querySelector(".loading")


// let dummy = []
window.addEventListener("DOMContentLoaded", () => {
    fetch('https://randomuser.me/api?results=20')
        .then(res => res.json())//raw data to JSON
        .then(data => {

            for (let i = 0; i < data.results.length; i++) {

                maleBtn.addEventListener("click", (e) => {
                    e.preventDefault()
                    maleBtn.classList.add("activ")
                    female.classList.remove("activ")

                    if(data.results[i].gender == "male"){
                        addNew(data.results[i])
                    }

                })

                female.addEventListener("click", (e) => {
                    e.preventDefault()
                    female.classList.toggle("activ")
                    maleBtn.classList.remove("activ")

                    if(data.results[i].gender == "female"){
                        addNew(data.results[i])
                    }
                })

            }

            search.addEventListener("keyup", () => {
                let lists = document.querySelectorAll("#name")
                for (let i = 0; i < lists.length; i++) {
                    if (lists[i].innerText.indexOf(search.value) != -1) {
                        lists[i].parentElement.parentElement.style.display = "block"
                    }
                    else {
                        lists[i].parentElement.parentElement.style.display = "none"
                    }
                }
            })

            function addNew(newData) {

                let mainDiv = document.createElement("div")
                mainDiv.setAttribute("class", "mndiv")
                UsersUI.append(mainDiv)

                let img = document.createElement("img")
                img.setAttribute("id", "imgs")
                img.src = newData.picture.large
                mainDiv.append(img)

                let a = document.createElement("a")
                a.href = `./user.html?id=${newData.id.value}`
                mainDiv.append(a)

                let name = document.createElement("li")
                name.setAttribute("id", "name")
                name.innerText = `${newData.name.first}  ${newData.name.last}`
                a.append(name)
            }

        }) // JSON to js object
        .catch(() => console.log("Network error"))
})