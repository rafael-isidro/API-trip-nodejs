const router = require('express').Router();
const serviceController = require('../controllers/serviceController');
const { validateId } = require('../middlewares/middlewares');

router.post('/services', (req, res) => serviceController.create(req, res));
router.get('/services', (req, res) => serviceController.getAll(req, res));
router.get('/services/:id', validateId, (req, res) => serviceController.get(req, res));
router.delete('/services/:id', validateId, (req, res) => serviceController.delete(req, res));
router.put('/services/:id', validateId, (req, res) => serviceController.update(req, res));

module.exports = router;