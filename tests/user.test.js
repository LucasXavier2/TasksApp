const request = require('supertest');
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'John',
    email: 'john@example.com',
    password: 'John12345.'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Lucas',
        email: 'lucas@lucas.com',
        password: '1234567'
    }).expect(201)
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexisting user', async () => {
    await request(app).post('/users/login').send({
        email: 'idontexist@example.com',
        password: '987654321'
    }).expect(400)
})