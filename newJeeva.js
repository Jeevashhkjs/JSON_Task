let UsersUI = document.querySelector(".UsersUI")
let maleBtn = document.querySelector(".maleBtn")

let female = document.querySelector(".femaleBtn")

let search = document.querySelector("#search")
let load = document.querySelector(".loading")

let allDatas = [];

window.addEventListener("DOMContentLoaded",()=>{
    fetch('https://randomuser.me/api?results=20')
    .then(res => res.json())//raw data to JSON
    .then(data => {

        load.style.display = "none"

        allDatas.push(data.results)
        //  addNew(data.results)

    })

})

maleBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    maleBtn.classList.toggle("activ")
    female.classList.remove("activ")

    filter()

 })

 function filter(){

    if(maleBtn.classList.contains("activ")){

        let maledatas = allDatas[0].filter(newMthod)

        function newMthod(datas){
            return datas.gender == "male"
        }
    
        addNew(maledatas)
    }
    else{
        addNew(allDatas[0])
    }

 }
 



function addNew(newData) {

    for(let i=0;i<newData.length;i++){

        let mainDiv = document.createElement("div")
        mainDiv.setAttribute("class", "mndiv")
        UsersUI.append(mainDiv)
    
        let a = document.createElement("a")
        a.href = `./user.html?id=${newData[i].id.value}`
        mainDiv.append(a)
    
        let img = document.createElement("img")
        img.setAttribute("id", "imgs")
        img.src = newData[i].picture.large
        a.append(img)
    
    
        let name = document.createElement("li")
        name.setAttribute("id", "name")
        name.innerText = `${newData[i].name.first}  ${newData[i].name.last}`
        a.append(name)

    }
}