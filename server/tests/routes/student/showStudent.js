const app = require('../app');
const request = require('supertest');

describe('GET /students', () => {
  it('should return a list of students', async () => {
    const response = await request(app).get('/students');
    expect(response.body).toBeInstanceOf(Array);
  });
});
