module.exports = (req,res,next) =>{
    req.session.userLogin && req.session.userLogin.rolId===1?next():res.redirect('/')
}