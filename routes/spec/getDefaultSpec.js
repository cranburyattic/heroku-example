'use strict';

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

const getDefault = require('../getDefault');

describe('Routes', function() {
    describe('GET Default', function() {
        it('should send a response', function() {
            var req, res, spy;

            req = res = {};
            spy = res.send = sinon.spy();

            getDefault(req, res);
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
