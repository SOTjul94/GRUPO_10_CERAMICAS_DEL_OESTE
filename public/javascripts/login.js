const $ = e => document.getElementById(e) 
const login = $("login");
const elements = login.elements;
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


const checkFields = () => {
    let error = false;
    for (let i = 0; i < elements.length - 1; i++) {
      
      if(!elements[i].value || elements[i].classList.contains('is-invalid')) {
        error = true
      }
      console.log(error)
    }
  
    if(!error){
      $('loginButton').disabled = false
      
    }else {
      $('loginButton').disabled = true
     
    }
  }

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

$('password').addEventListener('focus', function(e){
    cleanError('passwordMsg', e)
})

$('password').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('passwordMsg', 'Contraseña requerida', e);
            break;
    
        default:
            validField('passwordMsg', e)
            break;
    }
    checkFields()
})


$('login').addEventListener('submit', (e)=>{
  e.preventDefault();
  let error = false;
  const elements = $('login').elements;
  for (let i = 0; i < elements.length - 1; i++) {
        
    if(!elements[i].value || elements[i].classList.contains('is-invalid')){
        error = true;
        elements[i].classList.add('is-invalid')
        $('msgloginError').innerText = "Algunos tienen errores y/o están vacíos."
    }
    
}

!error &&  $('login').submit()
})