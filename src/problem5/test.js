const { ethers } = require("ethers");

const { abi } = require("./build/contracts/Balance.json");

const ADDR = "0xd4b259F0E6CA94061D6f82Ca0Db6Ef6948DA831B";   // your contract address
const ABI = abi;

const ADDRESS = "0xB12713BfA9d1DE339ca14B01F8F14f092ffE75bf"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x72766f6CF11BB5ff42044Fb4225A26978455eb1a",
  "0x6F4fd02b13B0f9e25221c549AcE95adaBF7A6464",
];

const provider = ethers.providers.getDefaultProvider("ropsten");

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

  const balances = await contract.getBalances(ADDRESS, TOKENS);
	
	return balances;
};

test().then(console.log);