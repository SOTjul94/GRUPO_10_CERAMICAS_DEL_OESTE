module.exports = (sequelize, dataTypes) => {
    let alias = 'Table_user';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true,
            autoIncrement : true
        }
    };
    let config = {
        timestamps : true
    }
    const Table_user = sequelize.define(alias,cols,config);

    //Relaciones 
    Table_user.associate = (models) => {

        Table_user.hasMany(models.Avatar, {
            as : 'avatar',
            foreignKey : 'id'
        }),
        Table_user.hasMany(models.Rol, {
            as : 'rol',
            foreignKey : 'user_id'
        }),
        Table_user.belongsTo(models.Edit_user, {
            as : 'edit_user',
            foreignKey : 'user_id'
        }),
        Table_user.belongsTo(models.ProductCart, {
            as : 'productCart',
            foreignKey : 'carritoDeCompras_user'
        })
    }

    return Table_user
}