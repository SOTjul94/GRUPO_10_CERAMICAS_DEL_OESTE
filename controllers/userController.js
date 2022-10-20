const { validationResult } = require('express-validator');
const { loadUsers, storeUsers } = require('../data/db');
const { compare, bcryptjs} = require("bcryptjs");
const { literal } = require("sequelize");
const db = require("../database/models");

module.exports = {
    login: (req, res) => {
        return res.render('login', {
            title: 'Login'
        })
    },processLogin: async (req, res) => {
        try {
          const { email, password } = req.body;
    
          if (!email || !password) {
           return res.status(401).json({
              ok: false,
              status: 401,
              msg: "El email y password son requeridos",
            }); 
          }
    
          const user = await db.User.findOne({ where: { email } });
    
          const { id, rolId, password: passwordHash } = user || { id:null, rolId:null,password:null }
    
          if (!user) {
            return res.status(404).json({
              ok: false,
              status: 404,
              msg: "No existe ningún usuario con ese email",
            }); 
          }
    
          const isPassValid = await compare(password,passwordHash)
    
          if(!isPassValid){
            return res.status(401).json({
              ok: false,
              status: 401,
              msg: "Credenciales invalidas",
            }); 
          }
        } catch (error) {
           res.status(500).json({
              ok: false,
              status: 500,
              msg: error.message,
            }); 
          }
          return res.redirect('/users/profile')
    },
    /*processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { id, name, username, rol, avatar } = loadUsers().find(user => user.email === req.body.email);
            req.session.userLogin = {
                id,
                username,
                name,
                rol,
                avatar
            };
            if (req.body.remember) {
                res.cookie('ceramicas10', req.session.userLogin, {
                    maxAge: 1000 * 60
                })
            };
            return res.redirect('/users/profile')
        } else {
            return res.render('login', {
                title: 'Login',
                errors: errors.mapped()
            })
        }
    },*/
    register: (req, res) => {
        return res.render('register', {
            title: 'Register'
        })
    },
    processRegister: async (req, res) =>{
      const {firstname, lastname, email, password, rol_id, avatar, document, nationality, birthday} = req.body
      try{ 
        const {id, rol_id} = await db.User.create({
                firstname: firstname?.trim(),
                lastname: lastname?.trim(),
                email: email?.trim(),
                password: bcryptjs.hashSync(password, 12),
                rol_id: 'user',
                avatar: "defaultUser.png",
                document: document,
                nationality: nationality?.trim(),
                birthday: birthday,
        })

      }catch (error){
        res.status(500).json({
            ok: false,
            status: 500,
            msg: error,

      });
      return res.redirect('/users/login')
    }

    /*processRegister: (req, res) => {
        let errors = validationResult(req);


        if (errors.isEmpty()) {
            const { firstname, lastname, email, password } = req.body;
            let users = loadUsers()

            let newUser = {
                id: users.length ? users[users.length - 1].id + 1 : 1,
                firstname: firstname?.trim(),
                lastname: lastname?.trim(),
                email: email?.trim(),
                password: bcryptjs.hashSync(password, 12),
                rol: 'user',
                avatar: null,
                document: null,
                nationality: null,
                birthday: null,
            }
            let usersModify = [...users, newUser];
            storeUsers(usersModify)

            return res.redirect('/users/login')
        } else {
            return res.render('register', {
                title: 'Register',
                errors: errors.mapped(),
                old: req.body
            })
        }*/
    

    },logout: async (req, res) => {
        try {
          const userId = req.params.id;
          const logoutUser = await db.User.destroy({ where: { id: userId },force:true  });
          
          if (!logoutUser) {
            return res.status(404).json({
              ok: false,
              status: 404,
              msg: "Es probable que el usuario no existe",
            });
          }
    
          return res.status(200).json({
            ok: true,
            status: 200,
          });
    
        } catch (error) {
          res.status(500).json({
            ok: false,
            status: 500,
            msg: error.message || "Server error",
          });
        }
        return res.redirect('/')
      },
    /*,logout: (req, res) => {
        res.session.destroy();
        return res.redirect('/')*/

    profile: (req, res) => {
        let user = loadUsers().find(user => user.id === req.session.userLogin.id)
        return res.render('profile', {
            title: 'Profile',
            user
        })

    },update: async (req, res) => {
        const { id } = req.params.id;
        const { firstname, lastname, avatar, document, nationality, birthday} = req.body;
        try {
          const options = {
            include: [
              {
                attributes: {
                  exclude: ["userId", "deletedAt"],
                },
              },
            ],
            attributes: {
              exclude: ["deletedAt", "password"],
              include: [
                [
                  literal(
                    `CONCAT( '${req.protocol}://${req.get(
                      "host"
                    )}images/',avatar )`
                  ),
                  "avatar",
                ],
              ],
            },
          };
          const user = await db.User.findByPk(id, options);
    
          user.firstname = firstname?.trim() || user.firstname;
          user.lastname = lastname?.trim() || user.lastname;
          user.avatar = req.file?.filename || user.avatar;
          user.document = document?.trim() || user.document;
          user.nationality = nationality?.trim() || user.nationality;
          user.birthday = birthday?.trim() || user.birthday;
    
          await user.save();
    
          return res.status(200).json({
            ok: true,
            status: 200,
            data: user,
          });
        } catch (error) {
          res.status(500).json({
            ok: false,
            status: 500,
            msg: error.message || "Ocurrió un error",
          });
        }
    /*update: (req, res) => {
         OBTENEMOS LOS USUARIOS 
        const users = loadUsers()
        /* DESTRUCTURACION DEL BODY 
        const { firstname,
            lastname,
            nationality,
            document,
            gender,
            birthday } = req.body

        /* MAPEAMOS LOS USUARIOS 
        const usersModify = users.map(user => {

            /* SI EL ID DEL USUARIO QUE SE RECORRE ES IGUAL AL PARAMETRO QUE MANDAMOS POR LA URL 
            if (user.id === +req.params.id) {
                /* RETORORNAMOS EL USUARIO QUE COINCIDE Y LE ACTUALIZAMOS LOS DATOS A PARTIR DE LO QUE NOS VIENE POR EL BODY 
                return {
                    ...user,
                    firstname: firstname?.trim(),
                    lastname: lastname?.trim(),
                    nationality: nationality?.trim(),
                    document: document?.trim(),
                    gender: gender?.trim(),
                    birthday,
                    avatar:null
                }
            }
            return user
        })
        storeUsers(usersModify)
        res.redirect("/users/profile")
        */
    }
}