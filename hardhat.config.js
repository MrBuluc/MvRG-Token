/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.infuraAPI,
      accounts: {mnemonic: process.env.mnemonic},
    }
  }
};
