require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/hhqu9RSpOeBcn1o2yeTM68wpNMsCbplI',
      accounts: ['b1a5523fc6f1fb84c72b2f4c46cd08ded31bf9a4dd75dffe08050bc8e2935817']
    }
  }
}