function Valida(){
    var user = document.getElementById('email').value;
    var pass = document.getElementById('senha').value;
    let regexUp = /[A-Z]/;
    let regexLow = /[a-z]/;
    let regexNumber = /[0-9]/;
    let checkpass = false;
    
    if(pass.length >= 6){
        document.querySelector('#pass-lenght').classList.add('label-senha-check');
        checkpass = true;
    }if (pass.length < 6){
        document.querySelector('#pass-lenght').classList.remove('label-senha-check');
        checkpass = false;
    }
    if (regexUp.test(pass)) {
        checkpass = true;
        document.querySelector('#pass-upper').classList.add('label-senha-check');
    }
    if (!regexUp.test(pass)) {
        checkpass = false;
        document.querySelector('#pass-upper').classList.remove('label-senha-check');
    }
    if (regexLow.test(pass)) {
        checkpass = true;
        document.querySelector('#pass-low').classList.add('label-senha-check');
    }
    if (!regexLow.test(pass)) {
        checkpass = false;
        document.querySelector('#pass-low').classList.remove('label-senha-check');
    }
    if (regexNumber.test(pass)) {
        checkpass = true;
        document.querySelector('#pass-number').classList.add('label-senha-check');
    }
    if (!regexNumber.test(pass)) {
        checkpass = false;
        document.querySelector('#pass-number').classList.remove('label-senha-check');
    }
    if (regexNumber.test(pass) && regexLow.test(pass) && regexUp.test(pass) && pass.length >= 6 ) {
        document.querySelector('#senha').classList.remove('input-email');
        document.querySelector('#senha').classList.add('input-email-ok');
    }else{
        document.querySelector('#senha').classList.add('input-email');
        document.querySelector('#senha').classList.remove('input-email-ok');
    }
    let regexEmail =/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)$/;
    if(regexEmail.test(user)){
        document.querySelector('#email').classList.remove('input-email');
        document.querySelector('#email').classList.add('input-email-ok');
    }else{
        document.querySelector('#email').classList.add('input-email');
        document.querySelector('#email').classList.remove('input-email-ok');
    }
}
export default Valida;