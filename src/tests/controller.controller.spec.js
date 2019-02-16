const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const { Model } = require("../models/model.model");
const controller = require("../controllers/controller.controller");

describe("Controller", () => {
    let resStub;

    before(() => {
        resStub = {
            json: sinon.spy()
        };
    });

    afterEach(() => {
        resStub.json.resetHistory();
    });

    describe("Action", () => {
        it("Should call the res.json() method with a model object in argument", (done) => {
            const req = {};
            const response = new Model("value");
            controller.action(req, resStub);
            expect(resStub.json.calledWith(response)).to.equal(true);
            done();
        });
    });
});
