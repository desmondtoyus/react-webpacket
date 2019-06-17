
const request = require('supertest');
const shortid = require('shortid');
const app = require('../../server/app');
const data = {
    password:"ilovereact",
    first_name:"Desmond",
    last_name:"Toye",
    role:"1",
    phone:949455454545,
    status:"active"
    }
// POST
describe('Create Flight',  () => {
    it('it should succesfully create a new User', async () => {
        data.email = `${shortid.generate()}@webpacket.org`
      const response = await request(app).post('/api/user')
    //   .set('Authorization', util.token)
      .set('Accept', 'application/json')
      .send(data)
      expect(response.statusCode).toBe(201)
      expect(response.body).toBeInstanceOf(Object);
  });
});

describe('LIST ALL USERS', function () {
it('it should return List of users', async () => {
    const response = await request(app).get('/api/user')
    .set('Accept', 'application/json')
    expect(response.statusCode).toBe(201);
    expect(response.body).toBeInstanceOf(Object);
});

})
