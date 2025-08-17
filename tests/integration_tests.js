const request = require('supertest');
const app = require('../app');

describe('Analytics Dashboard API', () => {
  describe('GET /api/dashboard', () => {
    it('should return the dashboard data', async () => {
      const res = await request(app).get('/api/dashboard');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('revenue');
      expect(res.body).toHaveProperty('activeUsers');
      expect(res.body).toHaveProperty('conversionRate');
      expect(res.body).toHaveProperty('growth');
      expect(res.body).toHaveProperty('revenueChart');
      expect(res.body).toHaveProperty('salesByCategory');
      expect(res.body).toHaveProperty('activityFeed');
    });
  });

  describe('GET /api/dashboard/export', () => {
    it('should export the dashboard data as a PDF', async () => {
      const res = await request(app).get('/api/dashboard/export?format=pdf');
      expect(res.statusCode).toEqual(200);
      expect(res.headers['content-type']).toEqual('application/pdf');
    });

    it('should export the dashboard data as an image', async () => {
      const res = await request(app).get('/api/dashboard/export?format=image');
      expect(res.statusCode).toEqual(200);
      expect(res.headers['content-type']).toContain('image/');
    });
  });
});

FILENAME: tests/unit_tests.js