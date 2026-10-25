const request = require('supertest');
const app = require('../app');

describe('API Integration Tests', () => {
    
    // Test 1: Check if the GET test route works properly
    test('GET /api/test should return success message', async () => {
        const response = await request(app).get('/api/test');
        
        // Assertions to check status code and response body
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toBe('API is working fine!');
    });

    // Test 2: Check successful user registration with valid data
    test('POST /api/register should create a user with valid data', async () => {
        const response = await request(app)
            .post('/api/register')
            .send({ username: 'mohammedzaid', email: 'zaid@test.com' });

        expect(response.status).toBe(201);
        expect(response.body.status).toBe('success');
        expect(response.body.data.username).toBe('mohammedzaid');
    });

    // Test 3: Check error handling when required fields are missing
    test('POST /api/register should fail if fields are missing', async () => {
        const response = await request(app)
            .post('/api/register')
            .send({ username: '' }); // Email is missing here

        expect(response.status).toBe(400);
        expect(response.body.status).toBe('fail');
    });

});