//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block

const expect = chai.expect;

const chaiResponseValidator = require('chai-openapi-response-validator');

chai.use(chaiResponseValidator('/Users/ssmg/dev/healthcare-api/openapi.json'));

describe('GET /Patient', () => {
  it('should satisfy OpenAPI spec', (done) => {

    chai.request(server)
        .get('/Patient')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.should.satisfyApiSpec;
      done();
    });

  }); 
});