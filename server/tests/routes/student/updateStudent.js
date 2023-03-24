const app = require('../app');
const request = require('supertest');

describe('PUT /students/:id', () => {
  it('should update an existing student', async () => {
    const newStudent = { name: 'John', grade: 'A' };
    const response = await request(app).post('/students').send(newStudent);
    const updatedStudent = { name: 'John Smith', grade: 'B' };
    const updatedResponse = await request(app).put(`/students/${response.body.id}`).send(updatedStudent);
    expect(updatedResponse.status).toBe(200);
    expect(updatedResponse.body.name).toEqual(updatedStudent.name);
    expect(updatedResponse.body.grade).toEqual(updatedStudent.grade);
  });
});
