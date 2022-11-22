import Web3Modal from "web3modal";
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css';
import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { Contract, providers } from "ethers";
import { WHITELIST_CONTACT_ADDRESS, abi } from "../constants/abi"

export default function Home() {
	const [walletConnected, setWalletConnected] = useState<boolean>(false);
	const [joinWhitelist, setJoinWhitelist] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [numberOfWhitelisted, setNumberWhitelisted] = useState<number>(0);

	const web3ModalRef = useRef<Web3Modal>();

	async function getProviderOrSigner(needSigner: boolean = false): Promise<Web3Provider | JsonRpcSigner> {
		const provider = await web3ModalRef.current!.connect();
		const web3Provider = new providers.Web3Provider(provider);
		const { chainId } = await web3Provider.getNetwork();
		if (chainId !== 5) {
			window.alert("change the network to Goerli!");
			throw new Error("Change Network To Goerli");
		}
		if (needSigner) {
			const signer = web3Provider.getSigner();
			return signer;
		}
		return web3Provider;
	}

	async function addAddressToWhitelist() {
		try {
			const signer = await getProviderOrSigner(true);
			const whitelistContract = new Contract(WHITELIST_CONTACT_ADDRESS, abi, signer);
			console.log(whitelistContract);
			const transaction = await whitelistContract.addAddressToWhitelisted();
			setLoading(true);
			await transaction.wait();

			setLoading(false);

			await getNumberOfWhitelisted();
			setJoinWhitelist(true);
		} catch (e) {
			console.error(e);
		}
	}

	async function getNumberOfWhitelisted() {
		try {
			const provider = await getProviderOrSigner();
			const whitelistContract = new Contract(WHITELIST_CONTACT_ADDRESS, abi, provider);
			const numForWhitelisted = await whitelistContract.numAddressesWhitelisted();
			setNumberWhitelisted(numForWhitelisted);
		} catch (e) {
			console.error(e);
		}
	}

	async function checkIfAddressInWhitelisted() {
		try {
			const signer = await getProviderOrSigner(true) as JsonRpcSigner;
			const whitelistContract = new Contract(WHITELIST_CONTACT_ADDRESS, abi, signer);

			const address = await signer.getAddress();
			const _joinWhitelist = await whitelistContract.whitelistedAddress(address);
			setJoinWhitelist(_joinWhitelist);
		} catch (error) {
			console.error(error);
		}
	}

	async function connectWallet() {
		try {
			await getProviderOrSigner();
			setWalletConnected(true);

			checkIfAddressInWhitelisted();
			getNumberOfWhitelisted();
		} catch (error) {
			console.error(error);
		}
	}

	function renderButton() {
		if (walletConnected) {
			if (joinWhitelist) {
				return (
					<div className={styles.description}>
						Thanks for joining the whitelisted!
					</div>
				);
			} else if (loading) {
				return (<button className={styles.button}>Loading...</button>)
			} else {
				return (
					<button onClick={addAddressToWhitelist} className={styles.button}>
						Join the Whitelist
					</button>
				);
			}
		} else {
			return (
				<button onClick={connectWallet} className={styles.button}>
					Connect your wallet
				</button>
			)
		}
	};

	useEffect(() => {
		if (!walletConnected) {
			web3ModalRef.current = new Web3Modal({
				network: "goerli",
				providerOptions: {},
				disableInjectedProvider: false,
			});
			connectWallet();
		}
	}, [walletConnected]);

	return (
		<div>
			<Head>
				<title>Whitelist Dapp</title>
				<meta name="description" content="Whitelist-Dapp" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.main}>
				<div>
					<h1 className={styles.title}>Welcome to Crypto Devs</h1>
					<div className={styles.description}>
						Its an NFT collection for developers in crypto.
					</div>
					<div className={styles.description}>
						{numberOfWhitelisted} have already joined the Whitelist.
					</div>
					{renderButton()}
				</div>
				<div>
					<img  src="/crypto-devs.svg" />
				</div>
			</div>

			<footer className={styles.footer}>
				Made with &#10084; by Crypto Devs
			</footer>
		</div>
	);
}


