const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const controllerControllers = require("../controllers/controller.controller");
const Model = require("../models/model.model").model;
const app = require("../app");

describe("Route", () => {
    let controllerControllersStub;

    before(() => {
        controllerControllersStub = {
            action: sinon.stub(controllerControllers, "action")
        };
    });

    afterEach(() => {
        controllerControllersStub.action.reset();
    });

    after(() => {
        controllerControllersStub.action.restore();
    });

    describe("Get", () => {
        it("Should return a response with an http 200 code and a body", (done) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjMyZjMwNmVkYzQ1MTQ5N2JhYmQ5NiIsImV4cCI6MTU1NTk2OTE2MSwiaWF0IjoxNTU1MzY0MzYxfQ.-F_rxT0nIJxsuFBSWcCSSDX6HXeWyJ9uxPo3m-EZ0nE";
            const response = new Model("value");
            controllerControllersStub.action.returns(response);
            chai.request(app)
                .get("/route/path")
                .set("authorization", "Bearer " + token)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.deep.equal(response);
                    done();
                });
        });
    });
});
