$(document).ready(function(){
    var btnNext = document.getElementById("next");
    var form = document.getElementById("form");

    btnNext.addEventListener("click", function(e){

        e.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var area = document.getElementById("area").value;
        var select = document.getElementById("select").value;
        var obj = {
            username: username,
            password: password,
            select: select,

        }
        localStorage.setItem("Cadastro", JSON.stringify(obj));
        form.reset();
    });
})