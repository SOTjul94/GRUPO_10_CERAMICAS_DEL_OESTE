console.log('eifeifiehfiheifhe');
const $ = e => document.getElementById(e) 
const register = $("register");
const elements = register.elements;
const emailExp =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


const cleanError = (element, {target}) => {
    target.classList.remove('is-invalid');
    target.classList.remove('is-valid');
};

const validField = (element, {target}) => {
    $(element).innerHTML = null;
    target.classList.remove('is-invalid')
    target.classList.add('is-valid');
  };

  const msgError = (element, msg, event) => {
    $(element).style.color = "red";
    $(element).innerHTML = msg;
    event.target.classList.add('is-invalid');
}





$('name').addEventListener('focus', function(e){
    cleanError('nameMsg', e)
})

$('name').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('nameMsg', 'Nombre requerido', e)
            break;
    
        default:
            validField('nameMsg', e)
            break;
    }
    checkFields()
})

$('surname').addEventListener('focus', function(e){
    cleanError('surnameMsg', e)
})

$('surname').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('surnameMsg', 'Precio requerido', e)
            break;
        case this.value < 0:
            msgError('surnameMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('surnameMsg', e)
            break;
    }
    checkFields()
})



$('documentNumber').addEventListener('focus', function(e){
    cleanError('documentNumberMsg', e)
})

$('documentNumber').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('documentNumberMsg', 'Codigo requerido', e)
            break;
        case this.value < 0:
            msgError('documentNumberMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('documentNumberMsg', e)
            break;
    }
    checkFields()
})

$('nacionality').addEventListener('focus', function(e){
    cleanError('nacionalityMsg', e)
})

$('nacionality').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('nacionalityMsg', 'Precio x caja requerido', e)
            break;
        case this.value < 0:
            msgError('nacionalityMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('nacionalityMsg', e)
            break;
    }
    checkFields()
})

$('pass').addEventListener('focus', function(e){
    cleanError('passMsg', e)
})

$('pass').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('passMsg', 'Origen requerido', e)
            break;
         default:
            validField('passMsg', e)
            break;
    }
    checkFields()
})

$('email').addEventListener('focus', function(e){
    cleanError('emailMsg', e)
})

$('email').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('emailMsg', 'Email requerido', e)
            break;
        case !emailExp.test(this.value):
            msgError('emailMsg', 'El email tiene un formato invalido', e);
            break;
        default:
            validField('emailMsg', e)
            break;
    }
    checkFields()
})


$('register').addEventListener('submit', (e)=>{
    e.preventDefault();
    let error = false;
    const elements = $('register').elements;
    for (let i = 0; i < elements.length - 2; i++) {
          
      if(!elements[i].value || elements[i].classList.contains('is-invalid')){
          error = true;
          elements[i].classList.add('is-invalid')
          $('msgEditionError').innerText = "Algunos tienen errores y/o están vacíos."
      }
      
  }
  
  !error &&  $('register').submit()
  })
