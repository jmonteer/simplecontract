const Migrations = artifacts.require("Migrations");
const SimpleContract = artifacts.require("SimpleContract");

module.exports = function (deployer) {

  deployer.deploy(Migrations);
  deployer.deploy(SimpleContract);
};
