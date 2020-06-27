const request = require("supertest");

const app = require('../src/app');

test('Deve responder a porta 3001', async () => {
  await request(app).get('/')
    .then(res => expect(res.status).toBe(200));
});