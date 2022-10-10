module.exports = (sequelize, dataTypes) => {
    let alias = 'Edit_user';
    let cols = {
        user_id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true
        },
        edit_user_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        timestamps : true
    }
    const Edit_user = sequelize.define(alias,cols,config);

    //Relaciones 
    Edit_user.associate = (models) => {

        Edit_user.belongsTo(models.Table_user, {
            as : 'table_user',
            foreignKey : 'user_id'
        })
    }

    return Edit_user
}