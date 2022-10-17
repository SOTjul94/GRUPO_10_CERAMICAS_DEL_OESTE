module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductCart';
    let cols = {
        carritoDeCompras_id : {
            type: dataTypes.INTEGER,
            allowNull : false,
            primaryKey: true,
            autoIncrement: true
        },
        products_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        price : {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        carritoDeCompras_user : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        carritoDeCompras_product : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps : true
    }
    const ProductCart = sequelize.define(alias,cols,config);

    //Relaciones
    ProductCart.associate = (models) => {
        ProductCart.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'products_id'
        }),
        ProductCart.hasMany(models.Table_user, {
            as : 'users',
            foreignKey : 'carritoDeCompras_user'
        })
    }

    return ProductCart
}
