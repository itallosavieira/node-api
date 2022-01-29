const { request } = require('http');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({
            active: true
        }, 'title price slug')
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send({
                message: 'Failed to get products list.',
                data: error
            });
        });
}

exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send({
                message: 'Failed to get product by id.',
                data: error
            });
        });
}

exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag,
            active: true
        }, 'title description proce slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(400).send({
                message: 'Failed to get products by tag.',
                data: error
            });
        });
}

exports.post = (req, res, next) => {
    const product = new Product(req.body);
    product.save()
    .then(c => {
        res.status(201).send({ message: 'Product registered successfully!'});
    }).catch(error => {
        res.status(400).send({
            message: 'Failed to register product.',
            data: error
        });
    });
};

exports.put = (req, res, next) => {
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
            res.status(201).send({
                message: 'Product updated successfully!'
            });
        }).catch(error => {
            res.status(400).send({
                message: 'Failed to update product.',
                data: error
            });
        });
};
exports.del = (req, res, next) => {
    Product
        .findOneAndRemove(req.body.id)
        .then(x => {
            res.status(201).send({
                message: 'Product deleted successfully!'
            });
        }).catch(error => {
            res.status(400).send({
                message: 'Failed to delete product.',
                data: error
            });
        });
};
