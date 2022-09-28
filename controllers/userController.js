const {validationResult} = require('express-validator');
const {loadUsers, storeUsers} = require('../data/db');
const bcryptjs = require('bcryptjs');

module.exports = {
    login : (req, res) => {
        return res.render('login', {
            title : 'Login'
        })
    },
    processLogin : (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let {id, name, username} = loadUsers().find(user => user.email === req.body.email);
            req.session.userLogin = {
                id,
                username,
                name,
            };
        if(req.body.remember){
            res.cookie('ceramicas10', req.session.userLogin,{
                maxAge : 1000 * 60
            })
        };
            return res.redirect('/users/profile')
        }else {
            return res.render('login', {
                title : 'Login',
                errors : errors.mapped()
            })
        }
    },
    register : (req, res) => {
        return res.render('register', {
            title : 'Register'
        })
    },
    processRegister : (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
        const {name, surname, email, password, username} = req.body;
        let users = loadUsers()

        let newUser = {
            id : users.length > 0 ? users[users.length - 1].id + 1 : 1,
            name : name?.trim(),
            surname : surname?.trim(),
            email : email?.trim(),
            password : bcryptjs.hashSync(password, 12),
            username : username?.trim(),
        }
        let usersModify = [...users, newUser];
            storeUsers(usersModify)

            return res.redirect('/users/login')
        }else{
            return res.render('register',{
                title : 'Register',
                errors : errors.mapped(),
                old : req.body
            })       
            }
        },
    logout : (req,res) => {
        res.session.destroy();
        return res.redirect('/')
    },
    profile : (req,res) => {
        let user = loadUsers().find(user => user.id === req.session.userLogin.id)
        return res.render('profile',{
            title: 'Profile',
            user
        })
    },
}


