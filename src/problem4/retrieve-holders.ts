import { BigNumber, Contract, ethers, utils } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(
	"https://bsc-dataseed.binance.org/"
);

const contractAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";

const abi: string[] = [
	"function balanceOf(address account) external view returns (uint256)",
];

const contract: Contract = new ethers.Contract(contractAddress, abi, provider);

const accountAddresses: string[] = [
	"0x123d475e13aa54a43a7421d94caa4459da021c77",
	"0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
	"0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const decimal = 8;

function getDecimalValue(balance: BigNumber) {
	return utils.formatUnits(balance, decimal);
}

async function getBalance(accountAddress: String) {
	const balance: BigNumber = await contract.balanceOf(accountAddress);
	const decimalBalance = getDecimalValue(balance);
	return decimalBalance;
}

async function printBalance(accountAddresses: string[]) {
	for (const accountAddress of accountAddresses) {
		try {
			const balance: string = await getBalance(accountAddress);
			console.log(accountAddress + " " + balance);
		} catch (error) {
			console.error(error);
		}
	}
}

printBalance(accountAddresses);