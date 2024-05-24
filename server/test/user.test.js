const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/user.js').default || require('../routes/user.js');
const { getAllUsers, getUser } = require('../controllers/user.js');

jest.mock('../controllers/user.js');

const app = express();
app.use(express.json());
app.use('/api/user', userRoutes);

describe('User Routes', () => {
    it('should get all users', async () => {
        getAllUsers.mockImplementation((req, res) => res.status(200).send([{ name: 'John' }]));

        const res = await request(app)
            .get('/api/user');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ name: 'John' }]);
    });

    it('should get a user by ID', async () => {
        getUser.mockImplementation((req, res) => res.status(200).send({ name: 'John' }));

        const res = await request(app)
            .get('/api/user/12345');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'John');
    });
});
