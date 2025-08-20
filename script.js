let container=document.body
let cur_theme = localStorage.getItem("key_theme")
container.classList=cur_theme
function changeTheme(){
    
    if(localStorage.getItem("key_theme")){
        container.classList = ""
        localStorage.removeItem("key_theme") //remove the key from localStorage
    }
    else{
    // stored in localStorage syntax: localStorage.setItem("key","value")
    localStorage.setItem("key_theme","theme")
    container.classList="theme"
    }

}