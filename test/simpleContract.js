const SimpleContract = artifacts.require("SimpleContract");
const BN = web3.utils.BN

contract("SimpleContracts", () => {
    const contract = async () => await SimpleContract.deployed()
    it("should return default string", async () => {
        const SIMPLE = await contract();
        const lastCheck = await SIMPLE.lastChecked.call();
        assert.equal(0, lastCheck, "did not set up right lastCheck");

        const n = await SIMPLE.checkNumber.call();
        assert.equal(n.toString(), (new BN(0)).toString(), "did not set up right string in constructor");
    })

    it("should change string", async () => {
        const SIMPLE = await contract()

        const newN = new BN(23);
        await SIMPLE.changeNumber(newN);

        const n = await SIMPLE.checkNumber.call();
        assert.equal(n.toString(), newN.toString(), "did not set up right string in change");
    })
})