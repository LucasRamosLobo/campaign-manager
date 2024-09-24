const Campaign = require('../models/campaign');

class CampaignService {
  static async createCampaign(data) {

    if (data.dataFim <= data.dataInicio) {
      throw new Error('A data de fim deve ser maior que a data de início.');
    }
    if (data.dataInicio < new Date()) {
      throw new Error('A data de início deve ser igual ou posterior à data atual.');
    }


    if (data.dataFim < new Date()) {
      data.status = 'expirada';
    } else {
      data.status = 'ativa';
    }

    return await Campaign.create(data);
  }

  static async getCampaigns() {
    return await Campaign.findAll();
  }

  static async getCampaignById(id) {
    return await Campaign.findByPk(id);
  }

  static async updateCampaign(id, data) {
    const campaign = await Campaign.findByPk(id);
    if (!campaign) {
      throw new Error('Campanha não encontrada.');
    }
    return await campaign.update(data);
  }

  static async deleteCampaign(id) {
    const campaign = await Campaign.findByPk(id);
    if (!campaign) {
      throw new Error('Campanha não encontrada.');
    }
    return await campaign.destroy();
  }
}

module.exports = CampaignService;
