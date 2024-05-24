const request = require('supertest');
const express = require('express');
const chatMessageRoutes = require('../routes/chatMessage.js').default || require('../routes/chatMessage.js');
const { createMessage, getMessages } = require('../controllers/chatMessage.js');

jest.mock('../controllers/chatMessage.js');

const app = express();
app.use(express.json());
app.use('/api/message', chatMessageRoutes);

describe('Chat Message Routes', () => {
    it('should create a new message', async () => {
        createMessage.mockImplementation((req, res) => res.status(201).send({ msg: 'Message created' }));

        const res = await request(app)
            .post('/api/message')
            .send({ text: 'Hello' });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('msg', 'Message created');
    });

    it('should get messages of a chat room', async () => {
        getMessages.mockImplementation((req, res) => res.status(200).send([{ text: 'Hello' }]));

        const res = await request(app)
            .get('/api/message/12345');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ text: 'Hello' }]);
    });
});
