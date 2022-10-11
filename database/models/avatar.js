module.exports = (sequelize, dataTypes) => {
    let alias = 'Avatar';
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true
        },
        avatar_img : dataTypes.STRING(45)
    };
    let config = {
        timestamps : true
    }
    const Avatar = sequelize.define(alias,cols,config);

    //Relaciones 
    Avatar.associate = (models) => {

        Avatar.belongsTo(models.User, {
            as : 'user',
            foreignKey : 'avatar_id'
        }),
        Avatar.belongsTo(models.Table_user, {
            as : 'table_user',
            foreignKey : 'id'
        })
    }

    return Avatar
}