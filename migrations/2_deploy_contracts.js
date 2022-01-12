const Contract = artifacts.require("Contract.sol");
const OOM = artifacts.require("OOM.sol");

module.exports = async function (deployer) {
    deployer.deploy(Contract);
    deployer.deploy(OOM);
    let address = await Contract.address;
    let contractInstance = await Contract.deployed();
    //contractInstance.callMe(address);
    let instance = await OOM.deployed();
    await instance.callMe(address);
    console.log("Test: " + instance);
};



