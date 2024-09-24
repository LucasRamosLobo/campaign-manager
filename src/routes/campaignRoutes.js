const express = require('express');
const CampaignController = require('../controllers/campaignController');

const router = express.Router();

router.post('/', CampaignController.create);
router.get('/', CampaignController.getAll);
router.get('/:id', CampaignController.getById);
router.put('/:id', CampaignController.update);
router.delete('/:id', CampaignController.delete);

module.exports = router;
