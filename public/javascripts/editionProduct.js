const $ = e => document.getElementById(e) 
const editionProduct = $("editionProduct");
const elements = editionProduct.elements;
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
            msgError('nameMsg', 'Minimo 10 caracteres', e)
            break;
    
        default:
            validField('nameMsg', e)
            break;
    }
})

$('price').addEventListener('focus', function(e){
    cleanError('priceMsg', e)
})

$('price').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('priceMsg', 'Precio requerido', e)
            break;
        case this.value < 0:
            msgError('priceMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('priceMsg', e)
            break;
    }
})

$('discount').addEventListener('focus', function(e){
    cleanError('discountMsg', e)
})

$('discount').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('discountMsg', 'Descuento requerido', e)
            break;
        case this.value < 0:
            msgError('discountMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('discountMsg', e)
            break;
    }
})

$('category').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value:
            msgError('categoryMsg', 'Categoria requerida', e)
            break;
    
        default:
            validField('categoryMsg', e)
            break;
    }
})

$('description').addEventListener('focus', function (e){
    $('descriptionInfo').hidden = false;
    $('numberCharacters').innerHTML = numberCharacters;

    cleanError('descriptionMsg', e)
})

$('description').addEventListener('blur', function (e) {

    $('descriptionInfo').hidden = true;
    switch (true) {
        case !this.value.trim():
            msgError('descriptionMsg', 'Descripcion requerida', e)
            break;
        case this.value.trim().length < 20:
            msgError('descriptionMsg', 'La descripcion debe tener minimo 20 caracteres', e)
            break;
        case this.value.trim().length >= 200:
            msgError('descriptionMsg', 'La descripcion debe tener maximo 200 caracteres', e)
            break;
         default:
            validField('descriptionMsg', e)
            break;
    }
})

$('description').addEventListener('keyup', function (e){
    numberCharacters = totalCharacters - +this.value.length
    $('numberCharacters').innerHTML = numberCharacters;

    if (numberCharacters <= 0) {
        $('descriptionInfo').hidden = true;
        msgError('descriptionMsg', 'La descripcion debe tener maximo 200 caracteres', e)
    } else {
       $('descriptionInfo').hidden = false;
       cleanError('descriptionMsg', e) 
    }
})

$('images').addEventListener('change', (e)=>{
    const newLogos = [];
    $('preview').innerHTML = null;

    [].forEach.call(e.target.files, readAndPreview);
    function readAndPreview(file) {
        if(e.target.files.length > 3){
            $("preview").innerHTML =
            "No se permiten más de tres imágenes";
        
            return null;
        }
      // Make sure `file.name` matches our extensions criteria
      if (!/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
        $("preview").innerHTML =
          "Solo imágenes con extensión jpg, jpeg, png, gif, webp";
      
          return null;
      } 
      $("preview").innerHTML = null;
      var reader = new FileReader();
      reader.addEventListener("load", function () {

        newLogos.push({
            name : file.name,
            src: this.result
        });

        $('preview').innerHTML += (`
        <div style="width: 90px;" id=${file.name}>
        <img class='mx-2 img-fluid' src='${this.result}' alt="logo">
        </div>
        `);
      });
      
      reader.readAsDataURL(file);

    }
})

$('code').addEventListener('focus', function(e){
    cleanError('codeMsg', e)
})

$('code').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('codeMsg', 'Codigo requerido', e)
            break;
        case this.value < 0:
            msgError('codeMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('codeMsg', e)
            break;
    }
    
})

$('box').addEventListener('focus', function(e){
    cleanError('boxMsg', e)
})

$('box').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('boxMsg', 'Precio x caja requerido', e)
            break;
        case this.value < 0:
            msgError('boxMsg', 'Nose permiten numeros negativos', e)
            break;
         default:
            validField('boxMsg', e)
            break;
    }
    
})

$('origin').addEventListener('focus', function(e){
    cleanError('originMsg', e)
})

$('origin').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('originMsg', 'Origen requerido', e)
            break;
         default:
            validField('originMsg', e)
            break;
    }
    
})

$('style').addEventListener('focus', function(e){
    cleanError('styleMsg', e)
})

$('style').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('styleMsg', 'Estilo requerido', e)
            break;
         default:
            validField('styleMsg', e)
            break;
    }
    
})

$('origin').addEventListener('focus', function(e){
    cleanError('originMsg', e)
})

$('origin').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('originMsg', 'Origen requerido', e)
            break;
         default:
            validField('originMsg', e)
            break;
    }
    
})

$('transit').addEventListener('focus', function(e){
    cleanError('transitMsg', e)
})

$('transit').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('transitMsg', 'Tipo de transito requerido', e)
            break;
         default:
            validField('transitMsg', e)
            break;
    }
    
})

$('pei').addEventListener('focus', function(e){
    cleanError('peiMsg', e)
})

$('pei').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('peiMsg', 'Tipo de transito(Pei) requerido', e)
            break;
         default:
            validField('peiMsg', e)
            break;
    }
    
})

$('recomendation').addEventListener('focus', function(e){
    cleanError('recomendationMsg', e)
})

$('recomendation').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('recomendationMsg', 'Recomendaciones de uso requerido', e)
            break;
         default:
            validField('recomendationMsg', e)
            break;
    }
    
})

$('model').addEventListener('focus', function(e){
    cleanError('modelMsg', e)
})

$('model').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('modelMsg', 'Estilo requerido', e)
            break;
         default:
            validField('modelMsg', e)
            break;
    }
    
})

$('dimension').addEventListener('focus', function(e){
    cleanError('dimensionMsg', e)
})

$('dimension').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('dimensionMsg', 'Dimensiones requeridas', e)
            break;
         default:
            validField('dimensionMsg', e)
            break;
    }
    
})

$('color').addEventListener('focus', function(e){
    cleanError('colorMsg', e)
})

$('color').addEventListener('blur', function (e) {
    switch (true) {
        case !this.value.trim():
            msgError('colorMsg', 'Color requerido', e)
            break;
         default:
            validField('colorMsg', e)
            break;
    }
    
})

$('editionProduct').addEventListener('submit', (e)=>{
    e.preventDefault();
    let error = false;
    const elements = $('editionProduct').elements;
    for (let i = 0; i < elements.length - 2; i++) {
          
      if(!elements[i].value || elements[i].classList.contains('is-invalid')){
          error = true;
          elements[i].classList.add('is-invalid')
          $('msgEditionError').innerText = "Algunos tienen errores y/o están vacíos."
      }
      
  }
  
  !error &&  $('editionProduct').submit()
  })


   