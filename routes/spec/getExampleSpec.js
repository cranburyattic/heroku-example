'use strict';

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const getExample = require('../getExample');

describe('Routes', function() {
    describe('GET Example', function() {
        it('should send a response', function() {
            var req, res, spy;

            req = res = {};
            spy = res.send = sinon.spy();

            getExample(req, res);
            expect(spy.calledOnce).to.equal(false);
        });
    });
});
