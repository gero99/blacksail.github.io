var check = document.querySelector(".checkBox")
check.addEventListener('click', idioma);
function idioma () {
    let id = check.checked;
    if(id == true) {
        location.href="./paginasEN/indexEN.html"
    } else{
        location.href="index.html"
    }
}