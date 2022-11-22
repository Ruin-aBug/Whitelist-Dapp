/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface WhitelistInterface extends utils.Interface {
  functions: {
    "addAddressToWhitelisted()": FunctionFragment;
    "maxWhitelistAddresses()": FunctionFragment;
    "numAddressesWhitelisted()": FunctionFragment;
    "whitelistedAddress(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAddressToWhitelisted"
      | "maxWhitelistAddresses"
      | "numAddressesWhitelisted"
      | "whitelistedAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAddressToWhitelisted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxWhitelistAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numAddressesWhitelisted",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistedAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAddressToWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxWhitelistAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numAddressesWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Whitelist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addAddressToWhitelisted(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maxWhitelistAddresses(overrides?: CallOverrides): Promise<[number]>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<[number]>;

    whitelistedAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  addAddressToWhitelisted(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maxWhitelistAddresses(overrides?: CallOverrides): Promise<number>;

  numAddressesWhitelisted(overrides?: CallOverrides): Promise<number>;

  whitelistedAddress(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    addAddressToWhitelisted(overrides?: CallOverrides): Promise<void>;

    maxWhitelistAddresses(overrides?: CallOverrides): Promise<number>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<number>;

    whitelistedAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addAddressToWhitelisted(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maxWhitelistAddresses(overrides?: CallOverrides): Promise<BigNumber>;

    numAddressesWhitelisted(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAddressToWhitelisted(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maxWhitelistAddresses(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numAddressesWhitelisted(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistedAddress(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
