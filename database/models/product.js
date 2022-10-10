module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement : true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(),
            allowNull: false
        },
        code: {
            type: dataTypes.DECIMAL(),
            allowNull: false
        },
        caja: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        finish: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        style: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        dimensions: {
            type: dataTypes.DECIMAL(),
            allowNull: false
        },
        pei: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        transit: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        recomendation: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        espesor: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        model: {
            type: dataTypes.DECIMAL(),
            allowNull: false
        },
        form: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    };

    let config = {
        timestamps : true
    }
    
    const Product = sequelize.define(alias,cols,config);

    //Relaciones 
    Product.associate = (models) => {

        Product.belongsTo(models.CeramicasDelOeste, {
            as : 'ceramicasDelOeste',
            foreignKey : 'product_id'
        }),
        Product.belongsTo(models.ProductCart, {
            as : 'productCarts',
            trough : 'carrito_products',
            foreignKey : 'products_id'
        })
    }

    return Product
}