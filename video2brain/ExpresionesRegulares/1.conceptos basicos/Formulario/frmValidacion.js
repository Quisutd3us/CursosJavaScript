$(function () {
    var frmContacto = document.getElementById('contactForm');
    console.log(frmContacto);
    var contador;
    frmContacto.onsubmit = function (e){
        e.preventDefault();
        console.log('le di click');
    }

});