$(document).ready(function(){

    var btnConsultar = document.getElementById("btnConsultar");

    btnConsultar.addEventListener("click", function(e){
        e.preventDefault();
        var dados_obj = localStorage.getItem("Cadastro");
        console.log(dados_obj);
        var dados_str = JSON.parse(dados_obj);
        console.log(dados_str);
        document.getElementById("username").textContent = dados_str.username;
        document.getElementById("password").textContent = dados_str.password;
        document.getElementById("area").textContent = dados_str.area;
        document.getElementById("select").textContent = dados_str.select;
    })

});