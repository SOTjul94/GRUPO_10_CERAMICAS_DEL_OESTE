console.log('orderCart.js connected');
 

const totalCart = document.getElementById('total-order');
const showItems = (items, total) => {
    const cartItems = document.getElementById('cart-items')
    cartItems.innerHTML = null

   if(items.length){
       items.forEach(({quantity, product, id}) => {
        cartItems.innerHTML += `
           <article class="productCart__main__article p-2">
           <div class="row">
               <div class="col-12 col-md-4 text-center">
                   <img class="img-fluid" src="/images/${product.images[0].file}" alt="${product.name}">

               
               </div>

               <div class="col-12 col-md-8">
                   <h3>${product.name}</h3>


                   <div class="">
                       <div class="d-flex justify-content-around mt-3">
                           <div>
                               <label for="quantity">Cantidad</label>
                               <input min="1" type="number" name="quantity" id="quantity" value="${quantity}" class="form-control w-50" onChange="modifyQuantity(${id},this.value)">
                           </div>
                           <button onClick="removeCartItem(${id})">Eliminar</button>
                       </div>
                       <div class="d-flex justify-content-around mt-3">
                           <h4>Precio: $ ${product.price}</h4>
                           <h4>Total: $ ${product.price * quantity}</h4>
                       </div>
                          
                   </div>
               </div>
           </div>
       </article>
           `
       })

}else {
    cartItems.innerHTML = `
        <div class='alert alert-info''>
             Aún no hay productos agregados al carrito
           </div>
    
    `
}
}

const getCart = async () => {

    try {

        let response = await fetch('/api/cart');
        let result = await response.json();

        if(result.ok){
            const {items, total} = result.data;
            showItems(items, total)
        }        
        
    } catch (error) {
        console.error
    }

}



 const addCartItem = async (id) => {
   try {

       let response = await fetch('/api/carts', {
           method : 'POST',
           body : JSON.stringify({
               id
           }),
           headers : {
               "Content-Type" : "application/json"
           }
       });

       let result = await response.json();
       //console.log(result);

       if(result.ok){
           const {items, total} = result.data;

           //showItems(items, total)
       }
       
   } catch (error) {
       console.error(error);
   }
   
};



const removeCartItem = async (id) => {
    try {
 
        let response = await fetch('/api/carts/' + id, {
            method : 'DELETE'
        });
 
        let result = await response.json();

 
        if(result.ok) {
            //console.log(result);
            showItems( result.data.items, result.data.total)
        }
 
        
    } catch (error) {
        console.error(error);
    }
 }

 const modifyQuantity = async (id, quantity) => {
    console.log(quantity);

    try {

        let response = await fetch('/api/carts/quantity', {
            method: 'POST',
            body: JSON.stringify({
                id,
                quantity
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let result = await response.json();
        console.log(result);

        if (result.ok) {
            const { items, total } = result.data;

            showItems(items, total)
        }

    } catch (error) {
        console.error(error);
    }
}


