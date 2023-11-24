const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let sandbox;

  beforeEach(function () {
    // Create a sandbox for each test
    sandbox = sinon.createSandbox();
    sandbox.stub(Utils, 'calculateNumber').returns(10);
    // sandbox.returns(10);
  });

  afterEach(function () {
    // Restore the sandbox to clean up stubs and spies
    sandbox.restore();
  });

  it('should stub calculateNumber and log the correct message', function () {
    // Stub the calculateNumber function
    //const calculateNumberStub = sandbox.stub(Utils, 'calculateNumber').returns(10);
    //const res = Utils.calculateNumber('SUM', )

    // Create a spy for console.log
    const consoleLogSpy = sandbox.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify the stub is called with the correct arguments
    assert(Utils.calculateNumber.calledWith('SUM', 100, 20));

    // Verify the console.log spy is called with the correct message
    assert(consoleLogSpy.calledWith('The total is: 10'));
  });
});
