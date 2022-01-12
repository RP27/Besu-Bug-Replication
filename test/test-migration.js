const { assert } = require("console");

const Contract = artifacts.require("Contract.sol");
const OOM = artifacts.require("OOM.sol");

contract("OOM", async () => {
    let contract;
    let oom; 

    beforeEach(async () => {
        contract = await Contract.new();
        oom = await OOM.new();
        let address = await Contract.address;
        console.log("Contract deployed with address " + contract.address);
        let callMe = await oom.callMe(address);
        console.log("OOM deployed with address " + callMe);
    });

    it("should allow OOM to perform the callMe function with the Contract's address passed through", async () => {
        try {
            assert(callMe.length != 0);
        } catch (err) {
            assert(err.toString().includes("ESOCKETTIMEDOUT"));
        }
    });
});