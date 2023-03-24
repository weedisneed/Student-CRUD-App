const app = require('../app');
const request = require('supertest');

describe('POST /students', () => {
  it('should create a new student', async () => {
    const newStudent = { name: 'John', grade: 'A' };
    const response = await request(app).post('/students').send(newStudent);
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual(newStudent.name);
    expect(response.body.grade).toEqual(newStudent.grade);
  });
});
