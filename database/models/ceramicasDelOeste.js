module.exports = (sequelize, dataTypes) => {
    let alias = 'CeramicasDelOeste';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        products_id : dataTypes.INTEGER,
        users_id : dataTypes.INTEGER,
        admin_id : dataTypes.INTEGER
    };
    let config = {
        timestamps : true
    }
    const CeramicasDelOeste = sequelize.define(alias,cols,config);

    //Relaciones 
    CeramicasDelOeste.associate = (models) => {

        CeramicasDelOeste.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'products_id',
        });

        CeramicasDelOeste.hasMany(models.User, {
            as : 'user',
            foreignKey : 'users_id'
        });

        CeramicasDelOeste.hasMany(models.Admin, {
            as : 'admin',
            foreignKey : 'admin_id'
        })
    }

    return CeramicasDelOeste
}