const { validationResult } = require("express-validator");
const { Op } = require("sequelize");
const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	totalProducts: (req, res) => {
		db.Product.findAll({
			include: ["images"],
		})
			.then((products) => {
				return res.render("totalProducts", {
					title: "totalProducts",
					products,
				});
			})
			.catch((error) => console.log(error));
	},
	filterProducts : (req,res) => {
		db.Product.findAll({
			include : ['images'],
			where : {
				category : req.query.category
			}
		})
			.then(products => {
				return res.render("totalProducts", {
					title: "totalProducts",
					products,
				});
			})
			.catch(error => console.log(error))
	},
	productDetail: (req, res) => {
		db.Product.findByPk(req.params.id,{
			include: ['images']
		})
			.then((product) =>
				res.render("productDetail", {
					product,
					toThousand,
				})
			)
			.catch((error) => console.log(error));
	},
	creationProduct: (req, res) => {
		return res.render("creationProduct");
	},
	store: (req, res) => {
		let errors = validationResult(req);
		
		/* ************************** */
		/* HACER VALIDACIONES BACKEND */
		/* ************************** */
		if(errors.isEmpty()){
		const {name, model, price, box, discount, description, color, style, dimension, transit, origin ,pei, recomendation, code, category} = req.body

		db.Product.create({
				
				name: name?.trim(),
				description: description?.trim(),
				model: model?.trim(),
				style: style?.trim(),
				dimension: dimension?.trim(),
				transit: transit?.trim(),
				origin: origin?.trim(),
				recomendation: recomendation?.trim(),
				code: code?.trim(),
				category: category,
				price,
				box,
				discount,
				color,
				pei

			})
			.then((product) => {
				if (req.files.length) {
					let image = req.files.map(({ filename }) => {
						return {
							file: filename,
							productId: product.id,
						};
					});
					db.Image.bulkCreate(image, {
						validate: true,
					}).then((result) => console.log(result));
				}
				return res.redirect("/products/totalProducts");
			})
			.catch((error) => console.log(error));
		}else {
			return res.render("creationProduct",{
				errors : errors.mapped(),
				old : req.body
			});
		}
	},
	editionProduct: (req, res) => {
		db.Product.findByPk(req.params.id,{
			include : ['images']
		})
			.then((product) => {
				return res.render("editionProduct", {
					product,
				});
			})
			.catch((error) => console.log(error));
	},
	update: (req, res) => {

		/* ************************** */
		/* HACER VALIDACIONES BACKEND */
		/* ************************** */
		const errors = validationResult(req);

		if(errors.isEmpty()){
			db.Product.update(
				{
					...req.body,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			)
				.then(async () => {
				
					if (req.files.length) {
						await db.Image.destroy({
							where : {
								productId : req.params.id
							}
						})
						let images = req.files.map(({ filename }) => {
							return {
								file: filename,
								productId: req.params.id,
							};
						});
						db.Image.bulkCreate(images, {
							validate: true,
						}).then((result) => console.log(result));
					}

					return res.redirect("/products/totalProducts")

				})
				
				
				.catch((error) => console.log(error));
		}else{
			db.Product.findByPk(req.params.id, {
				include : ['images']
			})
			.then((product) => {
				return res.render("editionProduct", {
					product,
					errors : errors.mapped()
				});
			})
			.catch((error) => console.log(error));
		}
	
	},
	
	destroy: (req, res) => {
	
		db.Product.destroy({
			where: {
				id: req.params.id,
			},
		})
			.then(() => res.redirect("/products/totalProducts"))
			.catch((error) => console.log(error));
	},
	search: (req, res) => {
		const { q } = req.query;
		db.Product.findAll({
			where: {
				[Op.or]: [
					{
						name: {
							[Op.substring]: q,
						},
					},
					{
						description: {
							[Op.substring]: q,
						},
					},
				],
			},
			include: ["images"],
		})
			.then((products) => {
				return res.render("totalProducts", {
					products,
					q,
					title : 'Resultado de la búsqueda'
				});
			})
			.catch((error) => console.log(error));
	},
	productCart: (req, res) => {
		return res.render("productCart", {
			title: "ProductCart",
		});
	},
};

module.exports = controller;
