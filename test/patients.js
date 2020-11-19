//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');


chai.use(chaiHttp);
//Our parent block

const expect = chai.expect;

// Import this plugin
const chaiResponseValidator = require('chai-openapi-response-validator');

// Load an OpenAPI file (YAML or JSON) into this plugin
chai.use(chaiResponseValidator('/Users/ssmg/dev/healthcare-api/openapi.json'));

// Write your test (e.g. using Mocha)
describe('GET /Patient', () => {
  it('should satisfy OpenAPI spec', async () => {

    const res = await chai.request(server).get('http://localhost:4000/Patient');

    expect(res.status).to.equal(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).to.satisfyApiSpec;
  });
});