import { ethers } from "ethers";

export const provider = new ethers.JsonRpcProvider(
  process.env.RPC_URL as string
);

export const wallet = new ethers.Wallet(
  process.env.PRIVATE_KEY as string,
  provider
);
