//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Tip = require('../app/models/tip');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Tips', () => {
    beforeEach((done) => { //Before each test we empty the database
        Tip.remove({}, (err) => { 
           done();         
        });     
    });
  /*
   * Test the /GET route
   */
  describe('GET /tip', () => {
      it('it should GET all the tips', (done) => {
        chai.request(server)
            .get('/tip')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  
  /*
   * Test the /GET/:id route
   */
  describe('GET /tip/:id', () => {
      it('it should GET a tip by the given id', (done) => {
        let tip = new Tip({ body: "Some body", category: "Some category" });
        tip.save((err, book) => {
            chai.request(server)
              .get('/tip/' + tip.id)
              .send(tip)
              .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('body');
                  res.body.should.have.property('category');
                  res.body.should.have.property('_id').eql(tip.id);
                done();
            });
        });

      });
  });

});
