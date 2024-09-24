const request = require('supertest');
const app = require('../app');

describe('Campaign API', () => {
  it('should create a new campaign', async () => {
    const res = await request(app)
      .post('/api/campaigns')
      .send({
        nome: 'Campanha Teste',
        dataInicio: new Date(Date.now() + 86400000),
        dataFim: new Date(Date.now() + 172800000),
        categoria: 'Categoria 1',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

});
