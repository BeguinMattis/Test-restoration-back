const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const controller = require("../controllers/controller.controller");
const { Model } = require("../models/model.model");
const app = require("../app");

describe("Route", () => {
    let controllerStub;

    before(() => {
        controllerStub = {
            action: sinon.stub(controller, "action")
        };
    });

    afterEach(() => {
        controllerStub.action.resetHistory();
    });

    after(() => {
        controllerStub.action.restore();
    });

    describe("Get", () => {
        it("Should return a response with an http 200 code and a body", (done) => {
            const response = new Model("value");
            controllerStub.action.returns(response);
            chai.request(app)
                .get("/route/path")
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.deep.equal(response);
                    done();
                });
        });
    });
});
