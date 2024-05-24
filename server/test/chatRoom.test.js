const request = require('supertest');
const express = require('express');
const chatRoomRoutes = require('../routes/chatRoom.js').default || require('../routes/chatRoom.js');
const { createChatRoom, getChatRoomOfUser, getChatRoomOfUsers } = require('../controllers/chatRoom.js');

jest.mock('../controllers/chatRoom.js');

const app = express();
app.use(express.json());
app.use('/api/room', chatRoomRoutes);

describe('Chat Room Routes', () => {
    it('should create a new chat room', async () => {
        createChatRoom.mockImplementation((req, res) =>
            res.status(201).send({ msg: 'Chat room created' }));
        const res = await request(app)
            .post('/api/room')
            .send({ name: 'General' });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('msg', 'Chat room created');
    });

    it('should get chat rooms of a user', async () => {
        getChatRoomOfUser.mockImplementation((req, res) =>
            res.status(200).send([{ name: 'General' }]));
        const res = await request(app)
            .get('/api/room/12345');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ name: 'General' }]);
    });

    it('should get chat room of two users', async () => {
        getChatRoomOfUsers.mockImplementation((req, res) => res.status(200).send([{ name: 'General' }]));

        const res = await request(app)
            .get('/api/room/12345/67890');

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual([{ name: 'General' }]);
    });
});
