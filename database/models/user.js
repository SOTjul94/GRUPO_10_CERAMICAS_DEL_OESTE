module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        idusers : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        firstname : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        lastname : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        email : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        avatar_id : {
            type: dataTypes.INTEGER,
            primaryKey: true
        },
        document : {
            type: dataTypes.DECIMAL,
            primaryKey: true
        },
        nacionality : {
            type: dataTypes.STRING(45),
            allowNull:false
        },
        birthday : {
            type: dataTypes.DATE,
            allowNull: false
        },
        rol_id : {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        password : {
            type: dataTypes.STRING(255),
            allowNull:false
        }
    };
    let config = {
        timestamps : true
    }
    const User = sequelize.define(alias,cols,config);

    //Relaciones 

    User.associate = (models) => {

        User.belongsTo(models.CeramicasDelOeste, {
            as : 'ceramicasDelOeste',
            foreignKey : 'user_id'
        }),
        User.hasMany(models.Avatar, {
            as : 'avatar',
            foreignKey : 'avatar_id'
        }),
        User.hasMany(models.Rol, {
            as : 'rol',
            foreignKey : 'rol_id'
        })
    }

    return User
}