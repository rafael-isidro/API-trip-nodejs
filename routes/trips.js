const router = require('express').Router();
const tripController = require('../controllers/tripController');
const { validateId, validateDate } = require('../middlewares/middlewares');

router.post('/trips', validateDate, (req, res) => tripController.create(req, res));
router.get('/trips', (req, res) => tripController.getAll(req, res));
router.get('/trips/:id', validateId, (req, res) => tripController.get(req, res));
router.delete('/trips/:id', validateId, (req, res) => tripController.delete(req, res));
router.put('/trips/:id', validateDate, validateId, (req, res) => tripController.update(req, res));
module.exports = router;