module.exports = (req, res, next) => {
    if(req.cookies.ceramicas10){
        res.session.userLogin = req.cookies.ceramicas10;
    }
    next()
}