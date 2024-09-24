const CampaignService = require('../services/campaignService');

class CampaignController {
  static async create(req, res) {
    try {
      const campaign = await CampaignService.createCampaign(req.body);
      res.status(201).json(campaign);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req, res) {
    const campaigns = await CampaignService.getCampaigns();
    res.status(200).json(campaigns);
  }

  static async getById(req, res) {
    try {
      const campaign = await CampaignService.getCampaignById(req.params.id);
      if (!campaign) {
        return res.status(404).json({ message: 'Campanha não encontrada.' });
      }
      res.status(200).json(campaign);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const campaign = await CampaignService.updateCampaign(req.params.id, req.body);
      res.status(200).json(campaign);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      await CampaignService.deleteCampaign(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = CampaignController;
