import { HardhatRuntimeEnvironment } from "hardhat/types/runtime";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	const { deployments, getNamedAccounts, getChainId } = hre;
	const { deploy} = deployments;
	const { deployer } = await getNamedAccounts();
	// console.log(deployer)
	// return;
	const whitelist = await deploy("Whitelist", {
		from: deployer,
		log: true,
		args: [10],
	});
	console.log("Whitelist address:", whitelist.address);
	const chainId = await getChainId();
	if (chainId !== "31337") {
		// 在etherscan上验证合约
		// 需先在hardhat.config.ts中配置hardhat-etherscan
		await hre.run("verify:verify", {
			address: whitelist.address,
			constructorArguments: [10],
		});
	}
};

export default func;
func.tags = ["whitelist"];