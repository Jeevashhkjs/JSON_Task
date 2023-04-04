let UsersUI = document.querySelector(".UsersUI")
let maleBtn = document.querySelector(".maleBtn")

let female = document.querySelector(".femaleBtn")

let search = document.querySelector("#search")
let load = document.querySelector(".loading")
let view = document.querySelector(".view")

window.addEventListener("DOMContentLoaded", () => {
    let num = 21
    view.addEventListener("click", () => {
        num += 21
        datas()
    })
    datas()
   function datas() {
    fetch(`https://randomuser.me/api?results=${num}`)
        .then(res => res.json())
        .then(data => {

            load.style.display = "none"

            let listes = document.querySelectorAll(".mndiv")
            remove(listes)

            filters()

            let imageses = document.querySelectorAll("#imgs")
            let nameses = document.querySelectorAll("#name")
            showName(imageses, nameses)

            maleBtn.addEventListener("click", (e) => {
                e.preventDefault()
                maleBtn.classList.toggle("activ")
                female.classList.remove("activ")

                let listes = document.querySelectorAll(".mndiv")
                remove(listes)

                filters()

                let imagess = document.querySelectorAll("#imgs")
                let namess = document.querySelectorAll("#name")
                showName(imagess, namess)

            })
            female.addEventListener("click", (e) => {
                e.preventDefault()
                female.classList.toggle("activ")
                maleBtn.classList.remove("activ")

                let listes = document.querySelectorAll(".mndiv")
                remove(listes)

                filters()

                let imagesees = document.querySelectorAll("#imgs")
                let namesees = document.querySelectorAll("#name")
                showName(imagesees, namesees)

            })

            search.addEventListener("keyup", () => {
                let lists = document.querySelectorAll("#name")
                for (let i = 0; i < lists.length; i++) {
                    if (lists[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()) != -1) {
                        lists[i].parentElement.parentElement.style.display = "block"
                    }
                    else {
                        lists[i].parentElement.parentElement.style.display = "none"
                    }
                }

                let images = document.querySelectorAll("#imgs")
                let names = document.querySelectorAll("#name")
                showName(images, names)
            })


            function showName(images, names) {

                for (let js = 0; js < images.length; js++) {

                    images[js].addEventListener("mouseenter", () => {
                        images[js].style.filter = "blur(4px)"
                        names[js].style.display = "block"
                    })

                    images[js].addEventListener("mouseout", () => {
                        images[js].style.filter = "blur(0px)"
                        names[js].style.display = "none"
                    })

                    names[js].addEventListener("mouseenter", () => {
                        images[js].style.filter = "blur(4px)"
                        names[js].style.display = "block"
                    })

                    names[js].addEventListener("mouseout", () => {
                        images[js].style.filter = "blur(0px)"
                        names[js].style.display = "none"
                    })

                }

            }

            function remove(listes) {
                for (let k = 0; k < listes.length; k++) {
                    listes[k].remove()
                }
            }

            function filters() {
                let updateData = data.results

                for(let jj=0;jj<updateData.length;jj++){
                    if (maleBtn.classList.contains("activ")) {
                        if (updateData[jj].gender == "male") {
                            addNew(updateData[jj])
                        }
                    }
                    else if (female.classList.contains("activ")) {
                        if (updateData[jj].gender == "female") {
                            addNew(updateData[jj])
                        }
                    }
                    else {
                        addNew(updateData[jj])
                    }
                }
            }

            function addNew(newData) {

                let mainDiv = document.createElement("div")
                mainDiv.setAttribute("class", "mndiv")
                UsersUI.append(mainDiv)

                let a = document.createElement("a")
                a.href = `./user.html?id=${newData.id.value}`
                mainDiv.append(a)

                let img = document.createElement("img")
                img.setAttribute("id", "imgs")
                img.src = newData.picture.large
                a.append(img)


                let name = document.createElement("li")
                name.setAttribute("id", "name")
                name.innerText = `${newData.name.first}  ${newData.name.last}`
                a.append(name)
            }

        })
        .catch(() => console.log("Network error")) 
   }

})