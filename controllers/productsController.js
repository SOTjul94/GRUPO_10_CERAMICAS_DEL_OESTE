module.exports = {
    productCart : (req, res) => {
        return res.render('productCart', {
            title : 'ProductCart'
        })
    },
    productDetail : (req, res) => {
        return res.render('productDetail', {
            title : 'ProductDetail'
        })
    }
}