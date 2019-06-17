const request = require('supertest');
const app = require('../app');
// Creating our unit tests
describe('Server Test', function() {
    it('should return home page', function(done) {
        return request(app).get('/')
            .expect("Content-type", /text/)
            // Expect the response status code to be 200
            .expect(200)
            // Tell the test runner we've finished and are done
            .end(done);
    });
});