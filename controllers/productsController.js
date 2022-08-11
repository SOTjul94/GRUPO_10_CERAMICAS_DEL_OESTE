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
    },
    editionProduct : (req, res) => {
        return res.render('editionProduct', {
            title : 'editionProduct'
        })
    },
    creationProduct : (req, res) => {
        return res.render('creationProduct', {
            title : 'creationProduct'
        })
    }
}