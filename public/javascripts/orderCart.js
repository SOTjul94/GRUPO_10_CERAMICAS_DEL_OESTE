console.log('OrderCart success!!');

window.addEventListener('load', async() => {
    try {
        
        let response = await fetch('/api/carts');
        let result = await response.json();

        console.log(result);
    } catch (error) {
        console.error 
    }
})