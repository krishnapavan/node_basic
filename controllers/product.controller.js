const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        }
        res.send('Product Created successfully')
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the Note."
            });
        }
        res.send('Product udpated.');
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while updating the Note."
            });
        }
        res.send('Deleted successfully!');
    })
};
