const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("./server.js");

chai.use(chaiHttp);

describe('Test for "/" api endpoint', () => {
  it("/ should send back 200 status code and atleast 1 product", done => {
    chai
      .request(app)
      .get("/product")
      .end((error, response) => {
        console.log("response - ", response.body);
        expect(response.body.length > 0).equal(true);
        expect(response.status).equal(200);
        done();
      });
  });
});

describe('Test for "/" api endpoint', () => {
  it("/ should send back 200 status code and atleast 1 contact", done => {
    chai
      .request(app)
      .get("/contact")
      .end((error, response) => {
        console.log("response - ", response.body);
        expect(response.body.length > 0).equal(true);
        expect(response.status).equal(200);
        done();
      });
  });
});

describe('Test for "/" api endpoint', () => {
  it("/ should send back 200 status code and index.html", done => {
    chai
      .request(app)
      .get("/")
      .end((error, response) => {
        console.log("response - ", response.text);
        expect(response.text.length > 0).equal(true);
        expect(response.status).equal(200);
        done();
      });
  });
});

describe('Test for "/" api endpoint', () => {
  it("/ should send back 200 status code and atleast 1 product", done => {
    const price = 15;
    chai
      .request(app)
      .get(`/productfilter/${price}`)
      .end((error, response) => {
        console.log("response - ", response.body);

        response.body.forEach(product => expect(product.amount).equal(price));
        expect(response.status).equal(200);
        done();
      });
  });
});


