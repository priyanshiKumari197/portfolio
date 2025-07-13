let menuList = document.querySelector("#menu-list");
let menuBar = document.querySelector("#menu-bar")

function toggleMenubar(){
    if(menuList.style.maxHeight === "0px" || menuList.style.maxHeight === ""){
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}