module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true
        },
        admin_id : {
           type: dataTypes.INTEGER,
           allowNull : false
        },
        user_id : {
            type: dataTypes.INTEGER,
            allowNull : false
         }
    };
    let config = {
        timestamps : true
    }
    const Rol = sequelize.define(alias,cols,config);

    //Relaciones 
    Rol.associate = (models) => {

        Rol.belongsTo(models.User, {
            as : 'user',
            foreignKey : 'rol_id'
        }),
        Rol.belongsTo(models.Table_user, {
            as : 'table_user',
            foreignKey : 'user_id'
        })

    }

    return Rol
}