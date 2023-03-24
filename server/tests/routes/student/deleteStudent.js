const app = require('../app');
const request = require('supertest');

describe('DELETE /students/:id', () => {
  it('should delete an existing student', async () => {
    const newStudent = { name: 'John', grade: 'A' };
    const response = await request(app).post('/students').send(newStudent);
    const deletedResponse = await request(app).delete(`/students/${response.body.id}`);
    expect(deletedResponse.status).toBe(204);
  });
});
