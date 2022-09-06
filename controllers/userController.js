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
            }
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
            return res.send(req.body) 
               
            },
       
   
   
   
    }





