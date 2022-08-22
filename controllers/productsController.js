const {loadProducts,storeProducts} = require('../data/productsModule')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
    productCart : (req, res) => {
        return res.render('productCart', {
            title : 'ProductCart'
        })
    },
    productDetail: (req, res) => {
		const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		return res.render('productDetail',{
			product,
			toThousand
		})
	},
    creationProduct : (req, res) => {
        return res.render('creationProduct', {
            title : 'creationProduct'
        })
    },
    totalProducts : (req, res) => {
        return res.render('totalProducts', {
            title : 'totalProducts'
        })
    },
    editionProduct: (req, res) => {
		
		const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		res.render('editionProduct',{
			product
		})
	},
	update: (req, res) => {
		// Do the magic
		const products = loadProducts();
		const {name, price, discount, category, description} = req.body;
		const productModify = products.map(product => {
			if(product.id === +req.params.id){
				return{
					...product,
					name : name.trim(),
					price : +price,
					discount : +discount,
					description : description.trim(),
					category
				}
			}
			return product
		})
		storeProducts(productModify)
		return res.redirect('/');
	},
    store: (req, res) => {
		// Do the magic
		const {name, price, discount,description, category} = req.body
		const products = loadProducts();

		const newProduct ={
			id : (products[products.length - 1].id + 1),
			name : name.trim(),
			description : description.trim(),
			price : +price,
			discount : +discount,
			image : 'default-image.png',
			category
		}
		const productsModify = [...products, newProduct];

		storeProducts(productsModify);

		return res.redirect('/products')
	},
    destroy : (req, res) => {
		
		const {id} = req.params;
		const products = loadProducts();

		const productModify = products.filter(product => product.id !== +id);

		storeProducts(productModify);
		return res.redirect('/products')

	}
};


module.exports = controller;