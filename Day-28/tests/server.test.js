const request = require('supertest');
const app = require('../src/server');
const pool = require('../src/config/db');

afterAll(async () => {
  // Close the database pool connection so Jest exits cleanly
  await pool.end();
});

describe('Production Hardening & Health Monitoring Tests', () => {
  test('GET /api/health should return success status and db connection info', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toContain('Server is healthy');
  });
});