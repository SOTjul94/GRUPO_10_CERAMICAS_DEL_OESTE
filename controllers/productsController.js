const db = require('../database/models');

const {loadProducts,storeProducts} = require('../data/productsModule');
const { promiseImpl } = require('ejs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controller = {
	search : (req, res) => {
		const {keywords} = req.query;
		db.Product.findAll({
			where : {
				[Op.or] : [
					{
						name : {
							[Op.substring] : keywords
						}
					},
					{
						description : {
							[Op.substring] : keywords
						}
					}
				]
			},
			include : ['image']
		})
		.then(products => {
			returnres.render('results',{
				products,
				keywords,
				toThousand
			})
		})
		.catch(error => console.log(error))
	},
    productCart : (req, res) => {
        return res.render('productCart', {
            title : 'ProductCart'
        })
    },
    productDetail: (req, res) => {
		/*const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		return res.render('productDetail',{
			product,
			toThousand
		}) */
		db.Product.findByPk(req.params.id)
		  .then(product => res.render('productDetail',{
			product,
			toThousand
		}))
		.catch(error => console.log(error))
	},
    creationProduct : (req, res) => {
		/*const products = loadProducts();
		
        return res.render('creationProduct', {
            title : 'creationProduct',
			products,
			toThousand
        }) */
		db.Category.findAll({
			attributes : ['id', 'name']
		})
		.then(categories => {
			return res.render('creationProduct',{
				categories
			})
		})
		.catch(error => console.log(error))
    },
    totalProducts : (req, res) => {
		const products = loadProducts();
        return res.render('totalProducts', {
            title : 'totalProducts',
			products
        })
    },
    editionProduct: (req, res) => {
		let categories = db.Category.findAll({
			attributes : ['id', 'name'],
			order : ['name']
		});
		let product = db.Product.findByPk(req.params.id);
		promiseImpl.all(([categories, product]))
		.then(([categories, product]) => {
			return res.render('editionProduct',{
				product,
				categories
			})
		})
		.catch(error => console.log(error));
		/*const products = loadProducts();
		const product = products.find(product => product.id === +req.params.id);
		res.render('editionProduct',{
			product,
			toThousand
		})*/
	},	
	update: (req, res) => {
		
		/*const products = loadProducts();
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
		storeProducts(productModify) */
		db.Product.update(
			{
				...req.body,
				name : req.body.name.trim(),
				description : req.body.description.trim()
			},
			{
				where : {
					id : req.params.id
				}
			}
		)
		.them(() => res.redirect('/products/totalProducts'))
		.catch(error => console.log(error))
	},	
    store: (req, res) => {
		
		//return res.send(req.file)
		
		/*const {name, price, code, color, description,caja, finish, style, dimensions, pei, transit, recomendation, espesor, model, form, origin} = req.body
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
			image : req.file ? req.file.filename: 'ceramica1.jpg',
			
		}
		const productsModify = [...products, newProduct];

		storeProducts(productsModify);

		return res.redirect('/products/totalProducts') */
		db.product.create({
			...req.body,
			name : req.body.trim(),
			description : req.body.description.trim()
		})
		.then(product => {
			if(req.files.length){
				let image = req.files.map(({filename}) => {
					return {
						file : filename,
						productId : product.id
					}
				})
				db.Image.bulkCreate(image,{
					validate : true
				})
				.then((result) =>console.log(result))
			}
			return res.redirect('/products')
		})
		.catch(error => console.log(error))
	},
    destroy : (req, res) => {
		
		/*const {id} = req.params;
		const products = loadProducts();

		const productModify = products.filter(product => product.id !== +id);

		storeProducts(productModify); */
		db.Product.destroy({
			where : {
				id : req.params.id
			}
		})
		.then(() => res.redirect('/products/totalProducts'))
		.catch(error => console.log(error));
	}
};


module.exports = controller;