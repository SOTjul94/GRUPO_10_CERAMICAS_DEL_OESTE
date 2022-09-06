const {loadProducts,storeProducts} = require('../../GRUPO_10_CERAMICAS_DEL_OESTE/data/productsModule')

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
		const products = loadProducts();
		
        return res.render('creationProduct', {
            title : 'creationProduct',
			products,
			toThousand
        })
    },
    totalProducts : (req, res) => {
		const products = loadProducts();
        return res.render('totalProducts', {
            title : 'totalProducts',
			products
        })
    },
    editionProduct: (req, res) => {
		
		const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		res.render('editionProduct',{
			product,
			toThousand
		})
	},
	update: (req, res) => {
		
		const products = loadProducts();
		const {name, price, code, color, description,caja, finish, style, dimensions, pei, transit, recomendation, espesor, model, form, origin} = req.body;
		const productModify = products.map(product => {
			if(product.id === +req.params.id){
				return{
					...product,
					name : name?.trim(),
					price : +price,
					code : +code,
					caja: +caja,
					color: color?.trim(),
					finish: finish?.trim(),
					style: style?.trim(),
					dimensions : +dimensions,
					pei: +pei,
					transit: transit?.trim(),
					recomendation: recomendation?.trim(),
					espesor: +espesor,
					model: model?.trim(),
					form: form?.trim(),
					origin: origin?.trim(),
					description : description?.trim(),
					
				}
			}
			return product
		})
		storeProducts(productModify)
		return res.redirect('/products/totalProducts');
	},
    store: (req, res) => {
		
		const {name, price, code, color, description,caja, finish, style, dimensions, pei, transit, recomendation, espesor, model, form, origin} = req.body
		const products = loadProducts();

		const newProduct ={
			id : (products[products.length - 1].id + 1),
			name : name?.trim(),
			description : description?.trim(),
			price : +price,
			code : +code,
			caja: +caja,
			color: color?.trim(),
			finish: finish?.trim(),
			style: style?.trim(),
			dimensions : +dimensions,
			pei: +pei,
			transit: transit?.trim(),
			recomendation: recomendation?.trim(),
			espesor: +espesor,
			model: model?.trim(),
			form: form?.trim(),
			origin: origin?.trim(),
			image : 'ceramica1.jpg',
			
		}
		const productsModify = [...products, newProduct];

		storeProducts(productsModify);

		return res.redirect('/products/totalProducts')
	},
    destroy : (req, res) => {
		
		const {id} = req.params;
		const products = loadProducts();

		const productModify = products.filter(product => product.id !== +id);

		storeProducts(productModify);
		return res.redirect('/products/totalProducts')

	}
};


module.exports = controller;