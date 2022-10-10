module.exports = (sequelize, dataTypes) => {
    let alias = 'Admin';
    let cols = {
        admin_id : {
            type : dataTypes.INTEGER,   
            primaryKey : true,
            allowNull : false
        }
    };
    let config = {
        timestamps : true
    }
    const Admin = sequelize.define(alias,cols,config);

    //Relaciones

    Admin.associate = (models) => {

        Admin.hasMany(models.CeramicasDelOeste, {
            as : 'ceramicasDelOeste',
            foreingKey : 'admin_id'
        })
    }
}