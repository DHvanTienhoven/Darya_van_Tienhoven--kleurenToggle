const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu")
const background = document.getElementById("background")

hamburgerButton.addEventListener("click", ()=>{
    menu.classList.toggle("visibleMenu");
    background.className="default-background";
})

const redButton = document.getElementById("red")
redButton.addEventListener("click", ()=>{
    background.className="red-background";
    menu.classList.remove("visibleMenu");
} )

const orangeButton = document.getElementById("orange")
orangeButton.addEventListener("click", ()=>{
    background.className="orange-background";
    menu.classList.remove("visibleMenu")
} )

const yellowButton = document.getElementById("yellow")
yellowButton.addEventListener("click", ()=>{
    background.className="yellow-background";
    menu.classList.remove("visibleMenu")
} )

const greenButton = document.getElementById("green")
greenButton.addEventListener("click", ()=>{
    background.className="green-background";
    menu.classList.remove("visibleMenu")
} )

const blueButton = document.getElementById("blue")
blueButton.addEventListener("click", ()=>{
    background.className="blue-background";
    menu.classList.remove("visibleMenu")
} )

const indigoButton = document.getElementById("indigo")
indigoButton.addEventListener("click", ()=>{
    background.className="indigo-background";
    menu.classList.remove("visibleMenu")
} )

const violetButton = document.getElementById("violet")
violetButton.addEventListener("click", ()=>{
    background.className="violet-background";
    menu.classList.remove("visibleMenu")
} )

background.addEventListener("keydown", ()=>{
    if(event.keyCode === 48||event.keyCode === 96){
        background.className="default-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 49||event.keyCode === 97){
        background.className="red-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 50||event.keyCode === 98){
        background.className="orange-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 51||event.keyCode === 99){
        background.className="yellow-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 52||event.keyCode === 100){
        background.className="green-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 53||event.keyCode === 101){
        background.className="blue-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 54||event.keyCode === 102){
        background.className="indigo-background";
        menu.classList.remove("visibleMenu")
    }
    if(event.keyCode === 55||event.keyCode === 103){
        background.className="violet-background";
        menu.classList.remove("visibleMenu")
    }

    })
