const express = require('express');
const controller = require('../controllers/product');
const router = express.Router();

router.get('/', controller.get);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/', controller.del);

module.exports = router;