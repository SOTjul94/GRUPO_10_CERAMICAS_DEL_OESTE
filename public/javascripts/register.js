
const msgError = (element, msg, {target} )  => {
    $(element).innerText = msg;
    target.classList.add('is-invalid');
}


$('nombre').addEventListener('blur', function(e){
    switch (true) {
        case !this.value.trim():
            msgError('errorFirstname', "El nombre es obligatorio", e)
            break;
    
        default:
            break;
    }
})
